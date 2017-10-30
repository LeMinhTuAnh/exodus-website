/* eslint-disable import/prefer-default-export */
import { ACTION_SET_SNACKBAR_CONTENT } from "../constants/actions";

let barID = 0;
export default function setSnackbarContent(text = "", button = {}) {
  barID++;
  return {
    type: ACTION_SET_SNACKBAR_CONTENT,
    payload: {
      text,
      button,
      barID,
    },
  };
}
