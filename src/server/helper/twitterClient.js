/* eslint
  no-unused-vars: "off"
*/

import passport from "../../core/passport";

const twitterConfig = {
  apiKey: "zUdEhFsYr0if6Oe2PDZMcXBfy",
  apiSecret: "Shj18LuKlaycd2AY3ekDZ0tqJmuYazQ1DRoXxXRKv8FNl21m1k",
  callbackUrl: "http://127.0.0.1:3001/ajax/account/twitterLogin/callback",
};

const Strategy = require("passport-twitter").Strategy;

// passport.use(new Strategy({
//   consumerKey: twitterConfig.apiKey,
//   consumerSecret: twitterConfig.apiSecret,
//   callbackURL: twitterConfig.callbackUrl,
// },
//   (token, tokenSecret, profile, cb) =>
//     // In this example, the user's Twitter profile is supplied as the user
//     // record.  In a production-quality application, the Twitter profile should
//     // be associated with a user record in the application's database, which
//     // allows for account linking and authentication with other identity
//     // providers.
//      cb(null, profile),
// ));

// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser((obj, cb) => {
//   cb(null, obj);
// });

export default passport;
