import * as TYPE from "../constants/type";
import * as DB from "../constants/db";
import * as entityHelper from "../helper/entityHelper";
import * as sqlHelper from "../helper/sqlHelper";

async function _loadGenre(entityId) {
  console.log("_loadgenre ", entityId);
  try {
    const rows = await sqlHelper.readQuery(
      "SELECT * FROM ?? e LEFT JOIN `genre` g ON e.eid=g.eid WHERE e.eid=? AND e.type=?",
      [DB.DB_TABLE_ENTITY, entityId, TYPE.ENTITY_TYPE_GENRE],
    );
    if (!rows || rows.length <= 0) {
      throw new Error("Unknown genre");
    }
    const genre = rows[0];
    if (genre.extra) {
      genre.extra = JSON.parse(genre.extra);
    }

    return genre;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function getGenre(entityId) {
  return entityHelper.getEntity(entityId);
}

function _updateGenre(genre) {
  return genre;
  // let promises = [];
  // return sqlHelper.updateQuery(
  //       TABLE_GENRE, {
  //         description: genre.description,
  //       }, {
  //         eid: genre.eid,
  //       });
}

export function getAllGenre() {
  return sqlHelper.readQuery("SELECT * FROM ?? e , ?? g  WHERE e.eid=g.eid AND e.published=1", [
    DB.DB_TABLE_ENTITY,
    DB.DB_TABLE_GENRE,
  ]);
}

export function getAllNanoGenreList() {
  return sqlHelper.readQuery(
    "SELECT e.eid, e.name, e.oid FROM ?? e  WHERE e.type=? AND e.published=1 ORDER BY e.name ",
    [DB.DB_TABLE_ENTITY, TYPE.ENTITY_TYPE_GENRE],
  );
}

entityHelper.registerEntityType(
  TYPE.ENTITY_TYPE_GENRE,
  DB.DB_TABLE_GENRE,
  _updateGenre,
  _loadGenre,
);
