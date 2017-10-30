/* eslint-disable import/prefer-default-export */

import { SET_RUNTIME_VARIABLE } from "../constants";
import { ACTION_OPEN_GET_APP_BAR, ACTION_CLOSE_GET_APP_BAR, ACTION_GET_DEEPLINK_REQUEST } from "../constants/actions";

export function setRuntimeVariable({ name, value }) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value,
    },
  };
}

export function openGetAppBar() {
  return {
    type: ACTION_OPEN_GET_APP_BAR,
  };
}
export function closeGetAppBar() {
  return {
    type: ACTION_CLOSE_GET_APP_BAR,
  };
}

export function getDeepLink(linkType, oid = "", options = {}) {
  if (!process.env.BROWSER) {
    return { type: "IGNORE" };
  }
  return {
    type: ACTION_GET_DEEPLINK_REQUEST,
    payload: {
      ...options,
      linkType,
      oid,
    },
  };
}
