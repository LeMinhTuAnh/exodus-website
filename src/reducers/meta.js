import update from "react-addons-update";

import { ACTION_UPDATE_META, ACTION_UPDATE_META_REQUEST } from "../constants/actions";
import { REDUCER_META } from "../constants/reducers";

export default function meta(
  state = {
    lastFetched: 0,
    isLoading: false,
    data: [],
    code: 0,
  },
  action,
) {
  switch (action.type) {
    case ACTION_UPDATE_META_REQUEST: {
      return update(state, {
        isLoading: {
          $set: true,
        },
      });
    }
    case ACTION_UPDATE_META: {
      const lastFetched = new Date().getTime();
      if (!action.data) {
        return update(state, {
          isLoading: {
            $set: false,
          },
          // lastFetched: {
          //   $set: lastFetched,
          // },
        });
      }
      const newData = {};
      const keys = Object.keys(action.data);
      if (!keys || keys.length === 0) {
        return update(state, {
          isLoading: {
            $set: false,
          },
          // lastFetched: {
          //   $set: lastFetched,
          // },
        });
      }

      for (let i = 0; i < keys.length; i++) {
        const oid = keys[i];
        newData[oid] = {
          $set: action.data[oid],
        };
      }
      return update(state, {
        isLoading: {
          $set: false,
        },
        lastFetched: {
          $set: lastFetched,
        },
        data: newData,
      });
    }

    default:
      return state;
  }
}

export const REDUCER_NAME = REDUCER_META;
