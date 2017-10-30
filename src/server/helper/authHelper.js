/* eslint
  no-continue: "off",
  no-shadow: "off",
  max-len: "off",
  no-param-reassign: "off",
  eslint no-param-reassign: "off"
*/

import Parse from "./parseClient";
import {
  cacheGet,
  cacheDel,
  cacheSetEx,
  cacheExpire,
  // CACHE_USERS,
} from "./cache";

import config from "../config/redis";
import { EXPIRE_GENERAL } from "../constants/expire";
import { isMaster } from "../../config";


import { error } from "./responseHelper";
import * as ERROR from "../constants/error";

const redis = require("redis");

// const permissions = {};
// const rolePermissions = {};
// const cacheAllRoles = {};

// export function getVarCacheAllRoles() {
//   const returnParams = {};
//   Object.keys(cacheAllRoles).forEach(key => {
//     returnParams[key] = cacheAllRoles[key].get("name");
//   });
//   return returnParams;
// }

export function saveUserData(user) {
  if (!user || !user.id) {
    return;
  }
  const cKeyUser = `user:${user.id}`;
  cacheSetEx(cKeyUser, EXPIRE_GENERAL, JSON.stringify(user._toFullJSON()));
}
export function delUserData(user) {
  if (!user || !user.id) {
    return;
  }
  const cKeyUser = `user:${user.id}`;
  cacheDel(cKeyUser);
}

export function saveAuthSession(user) {
  if (!user || !user.getSessionToken || !user.getSessionToken() || !user.id) {
    return;
  }
  const cKey = `sess:${user.getSessionToken()}`;
  cacheSetEx(cKey, EXPIRE_GENERAL, user.id);
  saveUserData(user);
}

export function deleteAuthSession(user) {
  if (!user) {
    return Promise.reject("this user can not logout");
  }
  const cKey = `sess:${user.getSessionToken()}`;
  return cacheDel(cKey);
}

export function getAuthSession(session) {
  const cKey = `sess:${session}`;
  return cacheGet(cKey).then((result) => {
    // console.log("user session data", result.toString("utf8"), cKey);
    if (result != null) {
      const cKeyUser = `user:${result}`;
      return cacheGet(cKeyUser).then((_result) => {
        // console.log("user data", _result.toString("utf8"), cKeyUser);
        if (_result != null) {
          const userJson = JSON.parse(_result);
          userJson.sessionToken = session;
          const user = Parse.Object.fromJSON(userJson);
          cacheExpire(cKey, EXPIRE_GENERAL);
          cacheExpire(cKeyUser, EXPIRE_GENERAL);
          return user;
        }
        return null;
      }, (err) => {
        console.log(err);
        return err;
      });
    }
    return null;
  }, (err) => {
    console.log(err);
    return err;
  });
}

// var getAllSession = function () {
//     return authSessions;
// }
// var deleteAllSession = function () {
//     authSessions = {};
//     return authSessions;
// }

// export function getAllRole() {
//   const roleQuery = new Parse.Query("_Role");
//   roleQuery.limit(1000);
//   roleQuery
//     .find({
//       useMasterKey: true,
//     })
//     .then(
//       (results) => {
//         for (let i = 0; i < results.length; i++) {
//           const role = results[i];
//           cacheAllRoles[role.id] = role;
//           const _permissions = role.get("permissions") || [];
//           const _rolePermissions = [];
//           _permissions.forEach(
//             perm => {
//               if (permissions[perm]) {
//                 return;
//               }
//               _rolePermissions.push(perm);
//             },
//             this,
//           );

//           rolePermissions[role.id] = _rolePermissions;
//         }
//       },
//       _error => {
//         console.error(_error);
//       },
//     );
// }

// function getAllPermission(roles = []) {
//   // console.log("getAllPermission", roles);
//   const perms = {};
//   for (let i = 0; i < roles.length; i++) {
//     const role = roles[i];
//     if (!rolePermissions[role.id]) {
//       continue;
//     }
//     const rolePerms = rolePermissions[role.id] || [];
//     for (let j = 0; j < rolePerms.length; j++) {
//       perms[rolePerms[j]] = true;
//     }
//   }
//   return Object.keys(perms);
// }

// export function getRolesByPermission(permission = null) {
//   const results = [];
//   Object.keys(rolePermissions).forEach(roleId => {
//     rolePermissions[roleId].forEach(permissionList => {
//       if (permissionList.indexOf(permission) >= 0) {
//         results.push(roleId);
//       }
//     });
//   });
//   return results;
// }

// export function getUserRoleNames(roles) {
//   const results = [];
//   if (roles && roles.length > 0) {
//     roles.forEach(role => {
//       if (!cacheAllRoles[role.id]) {
//         return;
//       }
//       results.push(cacheAllRoles[role.id].get("name"));
//     });
//   }
//   // console.log("role  :", roles);
//   // console.log("role name results:", results);
//   return results;
// }

// function isAllow(perm) {
//   console.log(this.permissions);
//   console.log(perm);
//   // return this.permissions.indexOf(perm) >= 0;
//   return true;
// }

export async function getUserFromParseSession(sessionToken = "") {
  const query = new Parse.Query("_Session");
  query.include("user");
  query.select([
    "user.username",
    "user.fullName",
    "user.email",
    "user.emailVerified",
    "user.profilePic",
    "user.nameTag",
    "user.emailVerified",
    "user.credit",
  ]);
  console.log("sessionToken", sessionToken);
  const result = await query.first({ sessionToken });
  if (!result || result === null) {
    return {};
  }
  const parseUser = result.get("user");
  const userJson = parseUser._toFullJSON();
  userJson.sessionToken = sessionToken;
  const user = Parse.Object.fromJSON(userJson);
  // Parse.User.enableUnsafeCurrentUser();
  // let user = await Parse.User.become(sessionToken);
  return user;
}

function parseToken(headers) {
  return headers && headers["x-session-token"];
}

export async function authMiddleware(req, res, next) {
  // console.log("req.cookies",req.cookies);
  let sessionToken = req.cookies && req.cookies.sessionToken;
  if (!sessionToken) {
    sessionToken = parseToken(req.headers);
  }
  if (sessionToken) {
    let result = await getAuthSession(sessionToken);
    if (result === null) {
      try {
        result = await getUserFromParseSession(sessionToken);
        if (result) {
          result.getSessionToken = () => sessionToken;
          saveAuthSession(result);
        } else {
          res.clearCookie("sessionToken");
        }
      } catch (err) {
        console.log(err);
        res.clearCookie("sessionToken");
      }
    }
    req.user = result;
    // if (req.user) {
    //   console.log(
    //       "request user : ",
    //       req.user.id,
    //       " ",
    //       req.user.get("username", " "),
    //       req.user.roleNames,
    //     );
    // }

    next();
  } else {
    next();
  }
}

export function checkRequestPermissionMiddleware(_permissions) {
  return (req, res, next) => {
    if (!req.user) {
      res.statusCode = 403;
      return error(res, ERROR.ACCESS_DENIED);
    }
    if (_permissions instanceof Array) {
      let _allow = true;
      _permissions.forEach(perm => {
        if (!req.user.isAllow(perm)) {
          _allow = false;
        }
      }, this);
      if (!_allow) {
        res.statusCode = 403;
        return error(res, ERROR.ACCESS_DENIED);
      }
    } else if (_permissions instanceof Function) {
      if (!_permissions(req)) {
        res.statusCode = 403;
        return error(res, ERROR.ACCESS_DENIED);
      }
    }
    return next();
  };
}

const redisCommandClient = redis.createClient(config.redis_mangarock_command_port, config.redis_mangarock_command_host);
redisCommandClient.on("error", (err) => {
  console.log(`redis Error ${err}`);
});

redisCommandClient.on("message", (channel, message) => {
  console.log(`sub channel ${channel}: ${message}`);
  const index = message.indexOf("|");
  if (index > 0) {
    const userObjectId = message.substring(0, index - 1);
    console.log("User updated ", userObjectId);
    delUserData({ id: userObjectId });
  }
});

if (isMaster) {
  redisCommandClient.subscribe(config.redis_mangarock_command_user_update_channel);
}

// getAllRole();
