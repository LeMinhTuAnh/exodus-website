import request from "request-promise";

const serverRequestConfig = require("../config/serverRequest.json");

async function callRequest(method = "get", action, qs = null, body = null) {
  return request({
    method,
    uri: `${serverRequestConfig.MR_CMS_URL}${action}`,
    qs,
    body,
    headers: {
      "s2s-key": serverRequestConfig.KEYCODE,
    },
    timeout: 10000,
    json: true,
  })
    .then(result => result)
    .catch(err => {
      throw err;
    });
}

export async function get(action, qs, body) {
  return callRequest("GET", action, qs, body);
}

export async function post(action, qs, body) {
  return callRequest("POST", action, qs, body);
}

export async function put(action, qs, body) {
  return callRequest("PUT", action, qs, body);
}

export async function del(action, qs, body) {
  return callRequest("DELETE", action, qs, body);
}

export async function patch(action, qs, body) {
  return callRequest("PATCH", action, qs, body);
}
