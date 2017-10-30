/* eslint
  no-param-reassign: "off",
  no-unused-vars: "off",
  consistent-return: "off"
*/

import config from "../../config";

const Twitter = require("node-twitter-api");

export default async (req, res) => {
  let callbackUrl = req.get("host");
  const callbackURI = req.query.callbackURI || "";

  if (callbackUrl.indexOf("mangarock.com") >= 0) {
    callbackUrl = `https://${callbackUrl}/ajax/login/twitterCallback`;
  } else if (callbackUrl.indexOf("localhost") >= 0) {
    callbackUrl = `http://${req.get("x-forwarded-host")}/ajax/login/twitterCallback`;
  } else {
    callbackUrl = `http://${callbackUrl}/ajax/login/twitterCallback`;
  }

  if (callbackURI) {
    callbackUrl = `${callbackUrl}?callbackURI=${callbackURI}`;
  }
  // console.log("callbackUrl", callbackUrl, req.get("x-forwarded-host"));
  const twitter = new Twitter({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
    callback: callbackUrl,
  });
  twitter.getRequestToken((err, requestToken, requestSecret) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect(`https://api.twitter.com/oauth/authenticate?oauth_token=${requestToken}`);
    }
  });
};
