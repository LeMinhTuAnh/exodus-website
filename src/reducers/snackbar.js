import update from "react-addons-update";

import { ACTION_SET_SNACKBAR_CONTENT } from "../constants/actions";
import { REDUCER_SNACKBAR } from "../constants/reducers";

export default function snackbar(
  state = {
    text: "",
    button: {},
    barID: "",
  },
  action,
) {
  switch (action.type) {
    case ACTION_SET_SNACKBAR_CONTENT: {
      if (!action.payload) {
        return state;
      }
      return update(state, {
        text: { $set: action.payload.text },
        button: { $set: action.payload.button },
        barID: { $set: action.payload.barID },
      });
    }

    default:
      return state;
  }
}

export const REDUCER_NAME = REDUCER_SNACKBAR;
