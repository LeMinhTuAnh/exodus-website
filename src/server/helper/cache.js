import config from "../config/redis";

const redis = require("redis");
// const zlib = require("zlib");
const compressSync = require("node-zstd").compressSync;
const decompressSync = require("node-zstd").decompressSync;

const msgpack = require("msgpack5")();

const _msgpackEncode = msgpack.encode;
const _msgpackDecode = msgpack.decode;
const zstdCompressParams = {
  level: 11,
};
const redisClient = redis.createClient(config.redis_port, config.redis_host, {
  return_buffers: true,
});
redisClient.on("error", (err) => {
  console.log(`redis Error ${err}`);
});
redisClient.select(config.redis_db);

export function getCacheClient() {
  return redisClient;
}

export function cacheGet(key) {
  return new Promise((resolve, reject) => {
    getCacheClient().get(key, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export function cacheDel(key) {
  return new Promise((resolve, reject) => {
    getCacheClient().del(key, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export function cacheSet(key, value) {
  return new Promise((resolve, reject) => {
    getCacheClient().set(key, value, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
export function cacheExpire(key, ttl) {
  return new Promise((resolve, reject) => {
    getCacheClient().expire(key, ttl, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export function cacheSetEx(key, ttl, value) {
  return new Promise((resolve, reject) => {
    getCacheClient().setex(key, ttl, value, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export function cacheMGet(keys) {
  return new Promise((resolve, reject) => {
    getCacheClient().mget(keys, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
}

export function encode(data) {
  return compressSync(Buffer(JSON.stringify(data)), zstdCompressParams);
}

export function msgpackEncode(data) {
  return _msgpackEncode(data);
}

export function msgpackDecode(data) {
  return _msgpackDecode(data);
}

export function decode(data) {
    // return msgpackDecode(decompressSync(data));
  return JSON.parse(decompressSync(data));
    // return msgpackDecode(zlib.inflateSync(data));
}
