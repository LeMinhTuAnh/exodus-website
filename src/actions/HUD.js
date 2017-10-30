/* eslint-disable import/prefer-default-export */
import { ACTION_SET_HUD_CONTENT } from "../constants/actions";

let hudID = 0;
export default function setHUDContent(text = "", image = "") {
  hudID++;
  return {
    type: ACTION_SET_HUD_CONTENT,
    payload: {
      text,
      image,
      hudID,
    },
  };
}
