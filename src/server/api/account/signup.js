/* eslint no-param-reassign: "off" */
import Parse from "../../helper/parseClient";

export default async (req, res) => {
  const user = new Parse.User();

  const email = req.body.email;
  const password = req.body.password;
  // console.log("sign upppp", email, password);
  const fullName = req.body.fullName || email;

  user.set("username", email);
  user.set("fullName", fullName);
  user.set("password", password);
  user.set("email", email);

  res.statusCode = 200;
  try {
    const result = await user.signUp();
    if (result) {
      const sessionToken = result.getSessionToken();

      res.cookie("sessionToken", sessionToken);
      res.redirect(302, "/ajax/account/me");
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(error);
  }
};
