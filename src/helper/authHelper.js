/* eslint
  no-unused-vars: "off"
*/

import fetch from "../core/fetch";

let currentUser = null;

export function setCurrentUser(user) {
  currentUser = user;
}

export function deleteCurrentUser() {
  currentUser = null;
}

export function getCurrentUser() {
  return currentUser;
}

export function isAllow(perm, user = getCurrentUser()) {
  if (!user || !user.permissions) {
    return false;
  }
  return user.permissions.indexOf(perm) !== -1;
}

export function isEqualCurrentUser(user) {
  if (!currentUser || !user || !user.objectId) {
    return false;
  }
  return user.objectId === currentUser.objectId;
}

export async function Logout() {
  console.log("logout clicked");
  // const logout = await fetch("/ajax/user/logout", {
  //   method: "post",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({}),
  //   credentials: "include",
  // });
  const logout = await fetch("/api/logout/parse_logout", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
    credentials: "include",
  });

  deleteCurrentUser();

  if (typeof window !== "undefined") {
    window.location = "/user/login";
  }
}

export function getRoleName(id) {
  const allRoles = window.extra.allRoles;
  if (id === "__all__") {
    return allRoles;
  }
  if (window.extra.allRoles[id]) {
    return window.extra.allRoles[id];
  }
  return `${id}`;
}
// export function getUnreadActivity(){
//   if(currentUser !== null && currentUser.unreadActivities){
//     return currentUser.unreadActivities.length;
//   }
// }
