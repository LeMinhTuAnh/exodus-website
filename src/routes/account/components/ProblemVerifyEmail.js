/* eslint max-len: "off" */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint
  no-shadow: "off",
  one-var: "off",
  prefer-const: "off"
*/
import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";
// import Button from "react-mdl/lib/Button";
import Button from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";

import s from "../resources/emailVerify.less"; // eslint-disable-line
// import { multiClass } from "../../../helper/utils";

class ProblemVerifyEmail extends React.Component {
  static propTypes = {
    email: PropTypes.string,
    country: PropTypes.string,
    userId: PropTypes.string,
    onResendEmailClick: PropTypes.func,
    onSignOutClick: PropTypes.func,
    onContactSupportClick: PropTypes.func,
  };
  static defaultProps = {
    email: "",
    country: "",
    userId: "",
    onResendEmailClick: () => {},
    onSignOutClick: () => {},
    onContactSupportClick: () => {},
  };
  isMobileDevice = () =>
    /Android|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent || navigator.vendor || window.opera,
    );

  render() {
    const { email, country, userId } = this.props;
    const subject = "Feedback for MangaRock";
    const device = this.isMobileDevice() ? "Mobile Web" : "Desktop Web";
    const body = `Hi, %0D%0A %0D%0A [Please describe your problems/suggestions here in English] %0D%0A %0D%0A Country: ${country} %0D%0A Device: ${device} %0D%0A User Info: ${userId} %0D%0A Source: Manga Rock %0D%0A %0D%0A Thank you.`;
    return (
      <div>
        <h2>Problem Verifying Email</h2>
        {/* <p>You are reporting Naruto chapter 265 with “Poor image quality” issue.</p> */}
        <p>
          Tap resend email to get another verifying email. If you still having problems, please
          contact customer support.
        </p>

        <div className={s["button-group"]}>
          <Button className={s.button} onClick={this.props.onResendEmailClick}>
            Resend Email
          </Button>
          <a
            onClick={this.props.onContactSupportClick}
            className={cn(s.button, "mdl-button mdl-js-button mdl-js-ripple-effect")}
            href={`mailto:support@notabasement.com?subject=${subject}&CC=${email}&BCC=${email}&body=${body}`}
          >
            contact support
          </a>
          <Button className={s.button} onClick={this.props.onSignOutClick}>
            Sign out
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProblemVerifyEmail);
