import mysqlConfig from "../config/mysql";

const mysql = require("mysql");

const readPool = mysql.createPool({
  connectionLimit: mysqlConfig.read.connectionLimit,
  host: mysqlConfig.read.host,
  user: mysqlConfig.read.user,
  password: mysqlConfig.read.password,
  database: mysqlConfig.read.database,
  port: mysqlConfig.read.port,
});

const writePool = mysql.createPool({
  connectionLimit: mysqlConfig.write.connectionLimit,
  host: mysqlConfig.write.host,
  user: mysqlConfig.write.user,
  password: mysqlConfig.write.password,
  database: mysqlConfig.write.database,
  port: mysqlConfig.write.port,
});

export function readQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    readPool.query(sql, params, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

export function writeQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    writePool.query(sql, params, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

export function updateQuery(table, fields, conditions) {
  if (fields.length <= 0) {
    return Promise.resolve(0);
  }
  const params = [table];
  let sql = "UPDATE ?? SET ";
  Object.keys(fields).forEach((key) => {
    if (params.length > 1) {
      sql += ",";
    }
    sql += "?? = ?";
    params.push(key);
    params.push(fields[key]);
  }, this);

  let first = true;
  sql += " WHERE ";

  Object.keys(conditions).forEach((key) => {
    if (!first) {
      sql += " AND ";
    }
    first = false;
    sql += "?? = ?";
    params.push(key);
    params.push(conditions[key]);
  }, this);
  console.log(sql);
  return writeQuery(sql, params);
}

// Insert item to table, result newly created id.
export function insertQuery(table, item) {
  if (!item) {
    return Promise.resolve(false);
  }
  let params = [table];
  let sql = "INSERT INTO ?? ";
  const fields = [];
  const values = [];
  const paramValues = [];
  Object.keys(item).forEach((key) => {
    fields.push("??");
    values.push("?");
    params.push(key);
    paramValues.push(item[key]);
  });

  params = params.concat(paramValues);

  sql = `${sql}(${fields.join(",")}) VALUES(${values.join(",")})`;
  return writeQuery(sql, params).then((result) => Promise.resolve(result.insertId), (err) => {
    console.log(err);
    return Promise.reject(err);
  });
}
