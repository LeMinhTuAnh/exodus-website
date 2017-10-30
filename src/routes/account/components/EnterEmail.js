/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import PropTypes from "prop-types";
// import cn from "classnames";

import s from "./Login.less"; // eslint-disable-line
// import Avatar from "../../../components/Avatar/index";
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";
import Block from "../../../submodules/uikit/src/UIKit/Elements/Block";
import RaisedButton from "../../../submodules/uikit/src/UIKit/Elements/RaisedButton";

class EnterEmail extends React.Component {
  static propTypes = {
    onSubmitEmail: PropTypes.func,
    onInputEmail: PropTypes.func,
    email: PropTypes.string,
  };
  static defaultProps = {
    onSubmitEmail: () => {},
    onInputEmail: () => {},
    email: "",
  };
  onHandleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <Block>
        {/* <div className={cn(s.wrap)}> */}

        <div style={{ marginBottom: 20 }}>
          <div className={s.avatarWrap}>
            <Avatar className={s.avatar} />
          </div>
          <div className={s.description}>
            Enter your email to sign in. If you do not have an account yet, we
            will create a new one for you.
          </div>
        </div>

        <form onSubmit={this.onHandleSubmit}>
          <div className={s.formGroup}>
            <input
              className={s.input}
              type="email"
              // autoFocus
              placeholder="Enter your email..."
              value={this.props.email}
              required
              onChange={e => this.props.onInputEmail(e.target.value)}
            />
          </div>
          <div className={s.formGroup}>
            <RaisedButton
              style={{ width: "100%" }}
              onClick={this.props.onSubmitEmail}
              type={"submit"}
            >
              {" "}Continue
            </RaisedButton>
          </div>
        </form>

        {/* </div> */}
      </Block>
    );
  }
}

export default withStyles(s)(EnterEmail);
