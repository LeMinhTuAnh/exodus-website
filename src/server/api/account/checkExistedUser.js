/* eslint no-param-reassign: "off" */
// import {
//   Router,
// } from "express";
import Parse from "../../helper/parseClient";


import * as responseHelper from "../../helper/responseHelper";
import * as ERROR from "../../constants/error";

export default async (req, res) => {
  const query = new Parse.Query(Parse.User);
  query.select(["username", "fullName", "email", "profilePic"]);
  const email = req.params.email;
  query.equalTo("username", email);


  try {
    const result = await query.first() || {};
    let username = "";
    let userEmail = "";
    let fullName = "";
    let profilePic = "";

    if (result !== null && Object.keys(result).length > 0) {
      username = result.get("username");
      userEmail = result.get("email");
      fullName = result.get("fullName");
      profilePic = result.get("profilePic");
    }
    res.statusCode = 200;
    responseHelper.success(res, {
      email: userEmail,
      username,
      fullName,
      profilePic,
    });
    // res.json(user);
  } catch (error) {
    console.error(error);
    responseHelper.error(res, ERROR.CUSTOM_ERROR);
  }
};
