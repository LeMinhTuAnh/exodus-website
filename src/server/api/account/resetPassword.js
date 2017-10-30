/* eslint no-param-reassign: "off" */
import Parse from "../../helper/parseClient";

import * as responseHelper from "../../helper/responseHelper";
// import * as ERROR from "../../constants/error";

export default async (req, res) => {
  const email = req.body.email || "";

  res.statusCode = 200;
  try {
    const result = await Parse.User.requestPasswordReset(email);
    console.log("reset password request", result);
        // res.json(user);
    responseHelper.success(res, {
      message: "reset password request sent",
    });
  } catch (error) {
    console.error(error);
    responseHelper.error(res, error);
  }
};
