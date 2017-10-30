/* eslint no-param-reassign: "off" */

import * as responseHelper from "../../helper/responseHelper";
import Parse from "../../helper/parseClient";

export default async (req, res) => {
  res.statusCode = 200;

  if (!req.user) {
    responseHelper.error(res, "User not found");
    return;
  }

//   if (!req.user.get("email")) {
//     responseHelper.error(res, "User email not found");
//     return;
//   }
//   const query = new Parse.Query(Parse.User);
//   query.select(["username", "fullName", "email", "profilePic"]);
//   query.equalTo("objectId", req.user.id);

//   const result = await query.first() || {};
//   console.log("usersssss", result);

//   const email = result.get("email");
//   result.set("email", email);
//   try {
//     const newUser = await result.save(null, { useMasterKey: true });
//     console.log("new userssssss", newUser);
//   } catch (error) {
//     console.log("errorrrrrrr", error);
//   }
  console.log(req.user.getSessionToken());
  try {
    const result = await Parse.Cloud.run("resendVerificationEmail", null, { sessionToken: req.user.getSessionToken() });
    console.log(result);
    if (result === "Ok") {
      responseHelper.success(res, req.user);
      return;
    }
  } catch (error) {
    console.log(error);
  }
  responseHelper.error(res, "Email not sent");
};
