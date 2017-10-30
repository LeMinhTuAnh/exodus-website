import fetch from "../../core/fetch";

import * as ACTIONS from "../../constants/actions";
import * as AJAX from "../../constants/ajax";
import * as REDUCER from "../../constants/reducers";
import { MAX_SERIES_IN_BLOCK } from "../../constants/index";

import { checkRequestInterval } from "../../helper/utils";

export function requestBanners(_doneCallback = null) {
  return {
    types: [
      ACTIONS.ACTION_HOME_BANNERS_REQUEST,
      ACTIONS.ACTION_HOME_BANNERS_SUCCESS,
      ACTIONS.ACTION_HOME_BANNERS_FAILURE,
    ],
    shouldCallAPI: state =>
      checkRequestInterval(state[REDUCER.REDUCER_HOME].banners, 10 * 3600 * 1000),
    callAPI: (parentRequest, state) =>
      fetch(
        AJAX.AJAX_GET_HOME_BANNERS.replace("{{country}}", state[REDUCER.REDUCER_RUNTIME].country),
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      ),
    payload: {},
    doneCallback: _doneCallback,
  };
}

// export function requestHotMangaUpdate(_doneCallback = null) {
//   return {
//     types: [
//       ACTIONS.ACTION_HOME_HOT_UPDATES_REQUEST,
//       ACTIONS.ACTION_HOME_HOT_UPDATES_SUCCESS,
//       ACTIONS.ACTION_HOME_HOT_UPDATES_FAILURE,
//     ],
//     shouldCallAPI: state =>
//       checkRequestInterval(state[REDUCER.REDUCER_HOME].hotUpdates, 10 * 3600 * 1000),
//     callAPI: () =>
//       fetch(AJAX.AJAX_GET_HOME_HOT_MANGA_UPDATES, {
//         method: "get",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }),
//     payload: {},
//     doneCallback: _doneCallback,
//   };
// }

export function requestTopPopular(_doneCallback = null) {
  const options = { order: "rank", limit: MAX_SERIES_IN_BLOCK };
  return {
    types: [
      ACTIONS.ACTION_GET_TOP_POPULAR_REQUEST,
      ACTIONS.ACTION_GET_TOP_POPULAR_SUCCESS,
      ACTIONS.ACTION_GET_TOP_POPULAR_FAILURE,
    ],
    shouldCallAPI: state =>
      !state[REDUCER.REDUCER_TOP_POPULAR] || !state[REDUCER.REDUCER_TOP_POPULAR].lastFetched,
    callAPI: (parentRequest, state) =>
      fetch(
        AJAX.AJAX_GET_ALL_SERIE.replace("{{country}}", state[REDUCER.REDUCER_RUNTIME].country),
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(options),
        },
      ),
    payload: options,
    doneCallback: _doneCallback,
  };
}

export function requestReadRightNow(_doneCallback = null) {
  return {
    types: [
      ACTIONS.ACTION_GET_READ_RIGHT_NOW_REQUEST,
      ACTIONS.ACTION_GET_READ_RIGHT_NOW_SUCCESS,
      ACTIONS.ACTION_GET_READ_RIGHT_NOW_FAILURE,
    ],
    shouldCallAPI: state =>
      state[REDUCER.REDUCER_READ_RIGHT_NOW] &&
      checkRequestInterval(state[REDUCER.REDUCER_READ_RIGHT_NOW].lastFetched, 10 * 3600 * 1000),
    callAPI: (parentRequest, state) =>
      fetch(
        AJAX.AJAX_GET_HOME_READ_RIGHT_NOW.replace(
          "{{country}}",
          state[REDUCER.REDUCER_RUNTIME].country,
        ),
        {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      ),
    payload: {},
    doneCallback: _doneCallback,
  };
}

export function requestHomeLatestUpdates(_doneCallback = null) {
  return {
    types: [
      ACTIONS.ACTION_HOME_LATEST_UPDATES_REQUEST,
      ACTIONS.ACTION_HOME_LATEST_UPDATES_SUCCESS,
      ACTIONS.ACTION_HOME_LATEST_UPDATES_FAILURE,
    ],
    shouldCallAPI: state =>
      state[REDUCER.REDUCER_HOME] &&
      checkRequestInterval(state[REDUCER.REDUCER_HOME].lastLatestFetched, 10 * 3600 * 1000),

    callAPI: (parentRequest, state) =>
      fetch(
        AJAX.AJAX_GET_HOME_LATEST_UPDATES.replace("{{country}}", state[REDUCER.REDUCER_RUNTIME].country),
        {
          method: "get",
          caching: true,
          headers: {
            Accept: "application/json",
          },
        },
      ),
    doneCallback: _doneCallback,
  };
}

export function requestHomeHotUpdates(_doneCallback = null) {
  return {
    types: [
      ACTIONS.ACTION_HOME_HOT_UPDATES_REQUEST,
      ACTIONS.ACTION_HOME_HOT_UPDATES_SUCCESS,
      ACTIONS.ACTION_HOME_HOT_UPDATES_FAILURE,
    ],
    shouldCallAPI: state =>
      state[REDUCER.REDUCER_HOME] &&
      checkRequestInterval(state[REDUCER.REDUCER_HOME].lastHotFetched, 10 * 3600 * 1000),

    callAPI: (parentRequest, state) =>
      fetch(
        AJAX.AJAX_GET_HOME_HOT_UPDATES.replace("{{country}}", state[REDUCER.REDUCER_RUNTIME].country),
        {
          method: "get",
          caching: true,
          headers: {
            Accept: "application/json",
          },
        },
      ),
    doneCallback: _doneCallback,
  };
}
