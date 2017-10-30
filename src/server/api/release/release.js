/* eslint no-param-reassign: "off" */

import fetch from "../../../core/fetch";

import {
    AJAX_GET_WEB_RELEASE,
} from "../../../constants/ajax";

let releaseConfig = null;

function updateReleaseConfig() {
  fetch(AJAX_GET_WEB_RELEASE, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(json => {
      releaseConfig = json.data;
    });
}

export default (req, res) => {
  const releaseParam = req.params.release;
  if (releaseConfig[releaseParam]) {
    res.redirect(releaseConfig[releaseParam]);
  }
};

updateReleaseConfig();
setInterval(() => {
  updateReleaseConfig();
}, 60000);
