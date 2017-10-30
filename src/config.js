/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
let _port = process.env.PORT || 3000;
// let _isMaster = false;
let _host = process.env.WEBSITE_HOSTNAME || null;

process.argv.forEach((val, index) => {
  if (val.indexOf("--port=") >= 0) {
    _port = parseInt(val.replace("--port=", ""));
  }
  if (val.indexOf("--host=") >= 0) {
    _host = val.replace("--host=", "");
  }
  // if (val.indexOf("--serverRendering=") >= 0) {
  //   process.env.SERVER_RENDERING = val.replace("--serverRendering=", "") === "true";
  // }
  // if (val.indexOf("--master") >= 0) {
  //   _isMaster = true;
  // }
  console.log(`${index}: ${val}`);
});

if (!_host) {
  _host = `http://localhost:${_port}`;
}

// export const isMaster = _isMaster;
export const port = _port;
export const host = _host;
export const isMaster = process.env.MASTER === "true";
export const enableServerRendering = process.env.SERVER_RENDERING === "true";

export const databaseUrl = process.env.DATABASE_URL || "sqlite:database.sqlite";

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: "UA-42208491-3", // process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET || "React Starter Kit" },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || "186244551745631",
    secret: process.env.FACEBOOK_APP_SECRET || "a970ae3240ab4b9b8aae0f9f0661c6fc",
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || "251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com",
    secret: process.env.GOOGLE_CLIENT_SECRET || "Y8yR9yZAhm9jQ8FKAL8QIEcd",
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || "Ie20AZvLJI2lQD5Dsgxgjauns",
    secret: process.env.TWITTER_CONSUMER_SECRET || "KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ",
  },

};
