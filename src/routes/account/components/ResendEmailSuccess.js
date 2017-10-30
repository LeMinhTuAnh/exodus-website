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
// import cn from "classnames";
// import Button from "react-mdl/lib/Button";
import Button from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";

import s from "../resources/emailVerify.less"; // eslint-disable-line
// import { multiClass } from "../../../helper/utils";

class ResendEmailSuccess extends React.Component {
  static propTypes = {
    onButtonOkClick: PropTypes.func,
    email: PropTypes.string,
  };
  static defaultProps = {
    onButtonOkClick: () => {},
    email: "",
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <h2>Success</h2>
        {/* <p>You are reporting Naruto chapter 265 with “Poor image quality” issue.</p> */}
        <p className={s["small-body"]}>
          We have resent verification email to {email}. Please verify that the
          email is yours!
        </p>

        <div className={s["button-group"]}>
          <Button className={s.button} onClick={this.props.onButtonOkClick}>
            OK
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ResendEmailSuccess);
