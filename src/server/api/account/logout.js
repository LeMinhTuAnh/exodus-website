/* eslint no-param-reassign: "off" */
import {
  deleteAuthSession,
} from "../../helper/authHelper";

import * as responseHelper from "../../helper/responseHelper";
import * as ERROR from "../../constants/error";

export default async (req, res) => {
  const currentUser = req.user || {};

  if (currentUser !== null && Object.keys(currentUser).length > 0) {
    res.statusCode = 200;
    try {
      const result = await deleteAuthSession(currentUser) || "";
      res.clearCookie("sessionToken");
      responseHelper.success(res, {
        message: result,
      });
    } catch (error) {
      console.error(error);
      responseHelper.error(res, ERROR.CUSTOM_ERROR);
    }
  }
};
