import fetch from "../../core/fetch";

import * as ACTIONS from "../../constants/actions";
// import * as REDUCER from "../../constants/reducers";
import * as AJAX from "../../constants/ajax";

export function login(username, password, _doneCallback = null) {
  // console.log("requestNanocharacters ", characterIds);
  return {
    types: [
      ACTIONS.ACTION_USER_LOGIN_REQUEST,
      ACTIONS.ACTION_USER_LOGIN_SUCCESS,
      ACTIONS.ACTION_USER_LOGIN_FAILURE,
    ],
    callAPI: () => fetch(AJAX.AJAX_POST_LOGIN_USER, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    }),
    doneCallback: _doneCallback,
  };
}

export function facebookLogin(sessionToken, _doneCallback = null) {
  // console.log("requestNanocharacters ", characterIds);
  return {
    types: [
      ACTIONS.ACTION_FACEBOOK_LOGIN_REQUEST,
      ACTIONS.ACTION_FACEBOOK_LOGIN_SUCCESS,
      ACTIONS.ACTION_FACEBOOK_LOGIN_FAILURE,
    ],
    callAPI: () => fetch(AJAX.AJAX_POST_FACEBOOK_LOGIN_USER, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ sessionToken }),
    }),
    // payload: user,
    doneCallback: _doneCallback,
  };
}

export function signup(email, password, _doneCallback = null) {
  // console.log("requestNanocharacters ", characterIds);
  return {
    types: [
      ACTIONS.ACTION_USER_SIGNUP_REQUEST,
      ACTIONS.ACTION_USER_SIGNUP_SUCCESS,
      ACTIONS.ACTION_USER_SIGNUP_FAILURE,
    ],
    callAPI: () => fetch(AJAX.AJAX_SIGNUP_USER, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }),
    doneCallback: _doneCallback,
  };
}
