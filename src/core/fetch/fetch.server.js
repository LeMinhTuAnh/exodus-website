/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Promise from "bluebird";
import fetch, { Request, Headers, Response } from "node-fetch";
import { host } from "../../config";

import { cacheGet, cacheSetEx } from "../../server/helper/cache";

fetch.Promise = Promise;
Response.Promise = Promise;

function localUrl(url) {
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  if (url.indexOf("https://api.mangarockhd.com") >= 0) {
    return url.replace("https://api.mangarockhd.com", "http://api.mangarockhd.com");
  }

  if (url.indexOf("https://mrapi.vn.nabstudio.com") >= 0) {
    return url.replace("https://mrapi.vn.mangarockhd.com", "http://mrapi.vn.nabstudio.com");
  }

  if (url.startsWith("http")) {
    return url;
  }

  return `${host}${url}`;
}

async function localFetch(url, options, parentRequest = null) {
  const requestOptions = options;
  const caching = requestOptions && requestOptions.caching === true && requestOptions.method.toLowerCase() === "get";
  if (caching) {
    const content = await cacheGet(`body:${url}`);
    if (content && content !== "") {
      return {
        ok: true,
        url,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve(JSON.parse(content)),
        text: () => Promise.resolve(content),
      };
    }
  }

  if (parentRequest) {
    const headers = {};
    const parentKeys = Object.keys(parentRequest.headers);
    for (let i = 0; i < parentKeys.length; i++) {
      const key = parentKeys[i];
      if (key.toLowerCase() === "host") {
        continue; // eslint-disable-line
      }
      headers[key] = parentRequest.headers[key];
    }

    const requestKeys = Object.keys(requestOptions.headers);
    for (let i = 0; i < requestKeys.length; i++) {
      const key = requestKeys[i];
      headers[key] = requestOptions.headers[key];
    }

    requestOptions.headers = headers;
  }

  const result = fetch(localUrl(url), requestOptions);
  if (caching) {
    return result.then(response => {
      response.clone().text().then(value => cacheSetEx(`body:${url}`, 30, value));
      return response;
    });
  }
  return result;
}

export { localFetch as default, Request, Headers, Response };
