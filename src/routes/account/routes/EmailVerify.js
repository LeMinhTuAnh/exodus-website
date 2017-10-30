import React from "react";

import EmailVerify from "../containers/EmailVerify";

export default function (context, serverRendering = false) {
  if (!process.env.BROWSER && !serverRendering) {
    return <div />;
  }
  return <EmailVerify />;
}
