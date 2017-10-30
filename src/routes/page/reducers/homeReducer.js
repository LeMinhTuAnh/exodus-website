import update from "react-addons-update";

import * as ACTIONS from "../../../constants/actions";
import * as REDUCERS from "../../../constants/reducers";
import { MAX_SERIES_IN_BLOCK } from "../../../constants/index";

function extractHomeLatestUpdate(items) {
  if (!items || items.length <= 0) {
    return [];
  }
  return items.slice(0, 50);
}

function extractHotLatestUpdate(items) {
  if (!items || items.length <= 0) {
    return [];
  }
  let hotUpdates = [];
  for (let i = 0; i < items.length; i++) {
    hotUpdates.push(items[i]);
  }
  hotUpdates.sort((a, b) => a.rank - b.rank);
  hotUpdates = hotUpdates.slice(0, MAX_SERIES_IN_BLOCK);

  return hotUpdates;
}

export default function assets(
  state = {
    lastFetched: null,
    lastLatestFetched: null,
    lastHotFetched: null,
    isLatestLoading: false,
    latestItems: [],
    hotLatestItems: [],
    isHotLoading: false,
    error: null,
    data: [],
    code: 0,
  },
  action,
) {
  switch (action.type) {
    case ACTIONS.ACTION_HOME_BANNERS_REQUEST:
      return update(state, {
        banners: {
          $set: {
            isLoading: true,
            error: null,
          },
        },
      });
    case ACTIONS.ACTION_HOME_BANNERS_SUCCESS:
      return update(state, {
        banners: {
          $set: {
            data: action.body.data,
            lastFetched: action.lastFetched,
            isLoading: false,
          },
        },
      });
    case ACTIONS.ACTION_HOME_BANNERS_FAILURE:
      return update(state, {
        banners: {
          $set: {
            error: action.error,
          },
        },
      });

    case ACTIONS.ACTION_HOME_LATEST_UPDATES_REQUEST:
      return update(state, {
        isLatestLoading: {
          $set: true,
        },
        error: {
          $set: null,
        },
      });

    case ACTIONS.ACTION_HOME_LATEST_UPDATES_SUCCESS:
      {
        // console.log("ACTIONS.ACTION_LATEST_UPDATES_SUCCESS");
        return update(state, {
          latestItems: {
            $set: extractHomeLatestUpdate(action.body.data),
          },
          isLatestLoading: {
            $set: false,
          },
          lastLatestFetched: {
            $set: action.lastFetched,
          },
          error: {
            $set: null,
          },
        });
      }

    case ACTIONS.ACTION_HOME_LATEST_UPDATES_FAILURE:
      return update(state, {
        isHotLoading: {
          $set: false,
        },
        error: {
          $set: action.body && action.body.data,
        },
      });

    case ACTIONS.ACTION_HOME_HOT_UPDATES_REQUEST:
      return update(state, {
        isHotLoading: {
          $set: true,
        },
        error: {
          $set: null,
        },
      });

    case ACTIONS.ACTION_HOME_HOT_UPDATES_SUCCESS:
      {
        // console.log("ACTIONS.ACTION_LATEST_UPDATES_SUCCESS");
        return update(state, {
          hotLatestItems: {
            $set: extractHotLatestUpdate(action.body.data),
          },
          isHotLoading: {
            $set: false,
          },
          lastHotFetched: {
            $set: action.lastFetched,
          },
          error: {
            $set: null,
          },
        });
      }

    case ACTIONS.ACTION_HOME_HOT_UPDATES_FAILURE:
      return update(state, {
        isLatestLoading: {
          $set: false,
        },
        error: {
          $set: action.body && action.body.data,
        },
      });

    default:
      return state;
  }
}

export const REDUCER_NAME = REDUCERS.REDUCER_HOME;
