import { readQuery, writeQuery } from "./sqlHelper";

import { cacheGet, cacheSet } from "./cache";

const TABLE_VARIABLE = "settings";

async function loadVariableValue(keyName) {
  const rows = await readQuery("SELECT `value` FROM ?? WHERE `key`=?", [TABLE_VARIABLE, keyName]);
  if (!rows || rows.length <= 0) {
    return null;
  }
    // console.log(rows);
  return rows[0].value;
}

function convertValueFromType(value, type) {
  switch (type) {
    case "string": {
      return value.toString("utf8");
    }
    case "number": {
      return parseInt(value);
    }
    case "float": {
      return parseFloat(value);
    }
    case "array": {
      return JSON.parse(value);
    }
    case "object": {
      return JSON.parse(value);
    }
    default:
  }

  return value;
}

function transformValueToType(value, type) {
  switch (type) {
    case "string": {
      return value;
    }
    case "number": {
      return value;
    }
    case "float": {
      return value;
    }
    case "array": {
      return JSON.stringify(value);
    }
    case "object": {
      return JSON.stringify(value);
    }
    default:
  }
  return value;
}

export async function getVariable(keyName, defaultValue = "", type = "string") {
  const cKey = `var:${keyName}`;
  try {
    let value = await cacheGet(cKey);
    if (!value) {
      value = await loadVariableValue(keyName);
      if (value) {
        cacheSet(cKey, transformValueToType(value, type));
      }
    }

    if (!value) {
      value = defaultValue;
    }
    return convertValueFromType(value, type);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function setVariable(keyName, value, type = "string") {
  const cKey = `var:${keyName}`;
  const _value = transformValueToType(value, type);
  return Promise.all([cacheSet(cKey, _value),
    writeQuery("INSERT INTO ?? (`key`, `value`) VALUES(?, ?) ON DUPLICATE KEY UPDATE `value`=VALUES(`value`)", [TABLE_VARIABLE, keyName, value])]);
}
