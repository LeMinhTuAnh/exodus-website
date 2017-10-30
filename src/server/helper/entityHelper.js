import { readQuery, writeQuery, updateQuery, insertQuery } from "./sqlHelper";

const EXPIRE_TIME = 60;

export const TABLE_ENTITY = "entity";

const {
  getCacheClient,
  cacheGet,
  // cacheSet,
} = require("./cache");

const entityTableMapping = {};

const entityType = {};

function _getEntityCacheKey(entityId) {
  return `e:${entityId}`;
}

function _updateEntityCache(entity) {
  const cKey = _getEntityCacheKey(entity.eid);
  return new Promise(resolve => {
    getCacheClient().setex(cKey, EXPIRE_TIME, JSON.stringify(entity), () => {
      resolve(entity);
    });
  });
}

function _deleteEntityCache(entity) {
  const cKey = _getEntityCacheKey(entity.eid);
  return new Promise(resolve => {
    getCacheClient().del(cKey, () => {
      resolve(entity);
    });
  });
}

export function deleteEntityCacheByEntityId(entityId) {
  return _deleteEntityCache({
    eid: entityId,
  });
}

export function registerEntityType(type, table, saveHandler = null, loadHandler = null) {
  entityTableMapping[type] = {
    dbTable: table,
    saveHandler,
    loadHandler,
  };
}

async function _getEntityType(entityId) {
  if (entityType[entityId]) {
    return entityType[entityId];
  }

  const rows = await readQuery("SELECT eid, `type` FROM entity WHERE eid=?", [entityId]);

  if (!rows || rows.length <= 0) {
    throw new Error(`Unknown entity ${entityId}`);
  }

  const entity = rows[0];
  entityType[entityId] = entity.type;
  return entity.type;
}

export async function getEntity(entityId, force = false) {
  const cKey = _getEntityCacheKey(entityId);
  // console.log("getEntity cKey=", cKey);

  const result = await cacheGet(cKey);

  if (result != null && !force) {
    return JSON.parse(result);
  }

  const _entityType = await _getEntityType(entityId);

  if (entityTableMapping[_entityType] && entityTableMapping[_entityType].loadHandler) {
    const loader = entityTableMapping[_entityType].loadHandler;

    const entity = await loader(entityId);

    await _updateEntityCache(entity);

    return entity;
  }
  throw new Error("Entity does not have a loader");
}

export async function getEntityByOid(oid) {
  const rows = await readQuery("SELECT eid, `type` FROM entity WHERE oid=?", [oid]);

  if (!rows || rows.length <= 0) {
    throw new Error(`Unknown entity oid ${oid}`);
  }

  return getEntity(rows[0].eid);
}

export async function createEntity(type, name, uid) {
  console.log("createEntity uid=", uid, " type=", type, " name=", name);
  const ts = Math.floor(Date.now() / 1000);
  try {
    const entityId = await insertQuery(TABLE_ENTITY, {
      type,
      name,
      createdAt: ts,
      updatedAt: ts,
      published: false,
      uid,
    });
    await updateQuery(
      TABLE_ENTITY,
      {
        oid: `mrs-${type}-${entityId}`,
      },
      {
        eid: entityId,
        oid: "",
      },
    );
    console.log("createdEntity uid=", uid, " type=", type, " entityId=", entityId);
    return entityId;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function snapshotEntity(entity, uid) {
  const ts = Math.floor(Date.now() / 1000);
  let rid = 0;
  try {
    const result = await writeQuery(
      "INSERT INTO entity_revision (eid, `createdAt`, `updatedAt`, revision_data, uid) VALUES(?, ?, ?, ?, ?)",
      [entity.eid, ts, ts, JSON.stringify(entity), uid],
    );
    rid = result.insertId;
    await writeQuery("UPDATE ?? SET rid=? WHERE eid=?", [
      entityTableMapping[entity.type].dbTable,
      rid,
      entity.eid,
    ]);
    return rid;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateEntity(entity, uid, snapshot = true) {
  console.log("updateEntity eid=", entity.eid);
  const ts = Math.floor(Date.now() / 1000);
  try {
    await updateQuery(
      TABLE_ENTITY,
      {
        name: entity.name,
        published: entity.published,
        updatedAt: ts,
      },
      {
        eid: entity.eid,
      },
    );
    if (entityTableMapping[entity.type].saveHandler) {
      await entityTableMapping[entity.type].saveHandler(entity);
    }

    await _deleteEntityCache(entity);

    const newEntity = await getEntity(entity.eid);
    if (snapshot) {
      await snapshotEntity(newEntity, uid);
    }

    return newEntity;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
