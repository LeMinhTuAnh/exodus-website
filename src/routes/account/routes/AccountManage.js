import React from "react";

import AccountManage from "../containers/AccountManage";
// import * as REDUCERS from "../../../constants/reducers";

export default (async function (context, serverRendering = false) {
  if (!process.env.BROWSER && !serverRendering) {
    return <div />;
  }
  return <AccountManage title={""} />;
});
