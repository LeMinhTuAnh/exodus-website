import { getUserFromParseSession, delUserData } from "../../helper/authHelper";
import { InitSocialData } from "../../helper/parseClient";

export default async (req, res) => {
  const sessionToken = req.body.sessionToken;
  const user = await getUserFromParseSession(sessionToken);
  if (!user) {
    res.end("Invalid session token");
    return;
  }

  if (!user.nameTag || user.nameTag === "") {
    try {
      await InitSocialData(sessionToken);
      delUserData(user);
    } catch (error) {
      console.log(error);
      res.end(200, { code: 100, data: "Unknown error" });
    }
  }
  res.cookie("sessionToken", sessionToken);
  res.redirect("/ajax/account/me");
};
