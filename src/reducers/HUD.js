import update from "react-addons-update";

import { ACTION_SET_HUD_CONTENT } from "../constants/actions";
import { REDUCER_HUD } from "../constants/reducers";

export default function HUD(
  state = {
    image: "",
    text: "",
    hudID: "",
  },
  action,
) {
  switch (action.type) {
    case ACTION_SET_HUD_CONTENT: {
      if (!action.payload) {
        return state;
      }
      return update(state, {
        image: { $set: action.payload.image },
        text: { $set: action.payload.text },
        hudID: { $set: action.payload.hudID },
      });
    }

    default:
      return state;
  }
}

export const REDUCER_NAME = REDUCER_HUD;
