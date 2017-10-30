import fetch from "../../core/fetch";
import parseConfig from "../config/parse";

const Parse = require("parse/node").Parse;

// // import Parse from 'parse-redux'
Parse.initialize(parseConfig.parseAppId, parseConfig.parseJsKey, parseConfig.parseMasterKey);
Parse.serverURL = parseConfig.parseUrl;
Parse.Promise.disableAPlusCompliant();
// Parse.initialize(parse_configuration.appId, parse_configuration.javascriptKey);
// const localStorage = require('localStorage');
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// console.log(Parse.Query);
export default Parse;

function callRESTAPI(
  action,
  sessionToken = null,
  method = "get",
  requestHeaders = {},
  data = null,
) {
  const headers = {
    "X-Parse-Application-Id": parseConfig.parseAppId,
    "X-Parse-REST-API-Key": parseConfig.parseRestId,
    ...requestHeaders,
  };
  if (sessionToken) {
    headers["X-Parse-Session-Token"] = sessionToken;
  }
  let endPoint = parseConfig.parseUrl + action;
  endPoint = endPoint.replace(/\/\//g, "/").replace(":/", "://");
  console.log("endpoint ", endPoint);
  return fetch(endPoint, {
    method,
    headers,
    body: typeof data === "object" ? JSON.stringify(data) : data,
  }).then(res => {
    console.log("res ", res.status);
    if (res.status >= 200 && res.status <= 300) {
      return res.json();
    }
    return Promise.reject(res.statusText);
  });
}

export function AuthTwitterAccount(twitterAuthData) {
  return callRESTAPI(
    "/users",
    null,
    "post",
    { "Content-Type": "application/json" },
    { authData: { twitter: twitterAuthData } },
  );
}

export function InitSocialData(sessionToken) {
  return callRESTAPI(
    "/functions/initSocialUser",
    sessionToken,
    "post",
    { "Content-Type": "application/json" },
    { },
  );
}
