import update from "react-addons-update";

import * as ACTIONS from "../../../constants/actions";
import * as REDUCERS from "../../../constants/reducers";

export default function (
  state = {
    lastFetched: null,
    isLoading: false,
    error: null,
    info: null,
    data: [],
    code: 0,
  },
  action,
) {
  switch (action.type) {
    case ACTIONS.ACTION_GET_READ_RIGHT_NOW_REQUEST:
      return update(state, {
        isLoading: {
          $set: true,
        },
        data: {
          $set: null,
        },
        error: {
          $set: null,
        },
      });
    case ACTIONS.ACTION_GET_READ_RIGHT_NOW_SUCCESS: {
      return update(state, {
        data: {
          $set: action.body.data,
        },
        isLoading: {
          $set: false,
        },
        lastFetched: {
          $set: action.lastFetched,
        },
        error: {
          $set: null,
        },
      });
    }
    case ACTIONS.ACTION_GET_READ_RIGHT_NOW_FAILURE:
      return update(state, {
        error: {
          $set: action.error,
        },
        isLoading: {
          $set: false,
        },
      });

    default:
      return state;
  }
}
export const REDUCER_NAME = REDUCERS.REDUCER_READ_RIGHT_NOW;
