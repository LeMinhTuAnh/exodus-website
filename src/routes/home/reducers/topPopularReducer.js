import update from "react-addons-update";

import * as ACTIONS from "../../../constants/actions";
import * as REDUCERS from "../../../constants/reducers";
import { MAX_SERIES_IN_BLOCK } from "../../../constants/index";

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
    case ACTIONS.ACTION_GET_TOP_POPULAR_REQUEST:
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
    case ACTIONS.ACTION_GET_TOP_POPULAR_SUCCESS: {
      let responseData = (action.body && action.body.data) || [];
      responseData = responseData.slice(0, MAX_SERIES_IN_BLOCK);
      return update(state, {
        data: {
          $set: responseData,
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
    case ACTIONS.ACTION_GET_TOP_POPULAR_FAILURE:
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
export const REDUCER_NAME = REDUCERS.REDUCER_TOP_POPULAR;
