/* eslint no-param-reassign: "off" */

import * as responseHelper from "../../helper/responseHelper";

export default async (req, res) => {
  res.statusCode = 200;
  responseHelper.success(res, req.user);
};
