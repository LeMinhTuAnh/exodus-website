/* eslint
  no-shadow: "off",
  one-var: "off",
  prefer-const: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./Login.less"; // eslint-disable-line

// submodules
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";
import Block from "../../../submodules/uikit/src/UIKit/Elements/Block";
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";

import { fbAsyncInit } from "../../../helper/parseHelper";

class ChooseLogin extends React.Component {
  static propTypes = {
    onFacebookLogin: PropTypes.func,
    onTwitterLogin: PropTypes.func,
    onInputEmailClick: PropTypes.func,
  };

  static defaultProps = {
    onFacebookLogin: () => {},
    onTwitterLogin: () => {},
    onInputEmailClick: () => {},
  };

  componentDidMount() {
    window.fbAsyncInit = fbAsyncInit;

    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "facebook-jssdk"));
  }

  render() {
    return (
      <Block>
        {/* <div className={cn(s.wrap, s.smallWrap)}> */}
        <div className={s.formGroup}>
          <div className={s.avatarWrap}>
            <Avatar className={s.avatar} />
          </div>
        </div>

        <div className={s.formGroup}>
          <a className={cn(s.facebook, s.button)} onClick={this.props.onFacebookLogin}>
            <img className={s.icon} src="/svg/share_facebook_icon.svg" alt="Facebook" />
            <div className={s.loginBtnText}>Continue with Facebook</div>
          </a>
        </div>

        <div className={s.formGroup}>
          <a className={cn(s.twitter, s.button)} onClick={this.props.onTwitterLogin}>
            <img className={s.icon} src="/svg/share_twitter_icon.svg" alt="Twitter" />
            <div className={s.loginBtnText}>Continue with Twitter</div>
          </a>
        </div>

        <div className={s.formGroup}>
          <FlatButton onClick={this.props.onInputEmailClick} style={{ width: 268 }}>
            Continue with Email
          </FlatButton>
        </div>
        {/* </div> */}
      </Block>
    );
  }
}

export default withStyles(s)(ChooseLogin);
