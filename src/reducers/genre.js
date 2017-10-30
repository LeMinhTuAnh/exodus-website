import update from "react-addons-update";

import { ACTION_SET_ALL_GENRES } from "../constants/actions";
import { REDUCER_GENRE } from "../constants/reducers";

export default function genre(
  state = {
    genres: {},
  },
  action,
) {
  switch (action.type) {
    case ACTION_SET_ALL_GENRES: {
      if (!action.body) {
        return state;
      }
      return update(state, {
        genres: {
          $set: action.data,
        },
      });
    }

    default:
      return state;
  }
}

export const REDUCER_NAME = REDUCER_GENRE;
