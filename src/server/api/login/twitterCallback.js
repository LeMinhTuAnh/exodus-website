import config from "../../config";
import { AuthTwitterAccount, InitSocialData } from "../../helper/parseClient";

const Twitter = require("node-twitter-api");

export default async (req, res) => {
  const requestToken = req.query.oauth_token;
  const verifier = req.query.oauth_verifier;
  const twitter = new Twitter({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
  });

  twitter.getAccessToken(requestToken, "", verifier, (err, accessToken, accessSecret) => {
    if (err) res.status(500).send(err);
    else {
      twitter.verifyCredentials(accessToken, accessSecret, (err1, twitterUser) => {
        if (err1) {
          console.error(err1);
          res.status(500).send(err1);
        } else {
          const authData = {
            id: twitterUser.id,
            screen_name: twitterUser.name,
            consumer_key: config.twitter.consumerKey,
            consumer_secret: config.twitter.consumerSecret,
            auth_token: accessToken,
            auth_token_secret: accessSecret,
          };
          AuthTwitterAccount(authData).then(
            response => {
              console.log("witter.getAccessToken ", response);
              let promise = Promise.resolve();
              if (!response.nameTag || response.nameTag === "") {
                promise = InitSocialData(response.sessionToken);
              }
              promise.then(
                () => {
                  res.cookie("sessionToken", response.sessionToken);
                  const callbackURI = req.query.callbackURI || "";
                  if (callbackURI) {
                    res.redirect(callbackURI);
                  } else {
                    res.redirect("/account/manage_account");
                  }
                },
                err3 => {
                  console.error(err3);
                  res.end(err3);
                },
              );
            },
            err2 => {
              console.error(err2);
              res.status(500).send(err2);
            },
          );
        }
      });
    }
  });
};
