/* eslint no-param-reassign: "off" */
// import {
//   Router,
// } from "express";
import Parse from "../../helper/parseClient";
import {
  saveAuthSession,
} from "../../helper/authHelper";

import * as responseHelper from "../../helper/responseHelper";
import * as ERROR from "../../constants/error";

export default async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await Parse.User.logIn(username, password);
    saveAuthSession(user);
    res.statusCode = 200;
    res.cookie("sessionToken", user.getSessionToken());
    // res.json(user);
    responseHelper.success(res, user);
  } catch (error) {
    console.error(error);
    responseHelper.error(res, ERROR.INVALID_LOGIN_REQUEST);
  }
};
