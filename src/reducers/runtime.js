/* eslint-disable */
import update from "react-addons-update";

import { ACTION_OPEN_GET_APP_BAR, ACTION_CLOSE_GET_APP_BAR, ACTION_GET_DEEPLINK_REQUEST } from '../constants/actions';
import { SET_RUNTIME_VARIABLE, RUNTIME_HTML_META } from "../constants";
import { updateHtmlMeta } from "../helper/utils";
export default function runtime(state = {}, action) {
  switch (action.type) {
    case SET_RUNTIME_VARIABLE: {
      if (JSON.stringify(state[action.payload.name]) === JSON.stringify(action.payload.value)) {
        return state;
      }
      if (process.env.BROWSER && action.payload.name === RUNTIME_HTML_META) {
        updateHtmlMeta(action.payload.value);
      }
      let newState = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      // console.log("newstate ", newState);
      return newState;
    }
    case ACTION_OPEN_GET_APP_BAR:
      return {
        ...state,
        openGetAppBar: true,
      };
    case ACTION_CLOSE_GET_APP_BAR:
      return {
        ...state,
        openGetAppBar: false,
      };
    case ACTION_GET_DEEPLINK_REQUEST:
      return {
        ...state,
        deepLinkType: action.payload.linkType,
        oid: action.payload.oid,
      };

    default:
      return state;
  }
}
