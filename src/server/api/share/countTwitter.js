import { AJAX_TWITTER_SHARE_COUNT } from "../../../constants/ajax";
import fetch from "../../../core/fetch";
import * as responseHelper from "../../helper/responseHelper";
import { cacheGet, cacheSetEx } from "../../helper/cache";

export default async (req, res) => {
  const url = req.body.url;

  const cKey = `tc:${url}`;

  const result = await cacheGet(cKey);
  if (result != null) {
    return responseHelper.success(res, parseInt(result.toString("utf8")));
  }

  return fetch(AJAX_TWITTER_SHARE_COUNT.replace("{{url}}", encodeURI(url)), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(json => {
      cacheSetEx(cKey, 3600, json.count);
      return responseHelper.success(res, json.count);
    });
};
