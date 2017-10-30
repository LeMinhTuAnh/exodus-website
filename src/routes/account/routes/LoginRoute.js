import React from "react";

// import { initFetchAction } from "../../../helper/utils";

import LoginPage from "../containers/LoginPage";
// import * as REDUCERS from "../../../constants/reducers";

export default (async function (context, serverRendering = false) {
  if (!process.env.BROWSER && !serverRendering) {
    return <div />;
  }
  const callbackRoute = context.query.callbackRoute || "";
  // console.log(callbackRoute);
  return <LoginPage callbackRoute={callbackRoute} title={"Log in to Manga Rock"} />;
});
