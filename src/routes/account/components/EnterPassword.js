/* eslint
  jsx-a11y/no-autofocus: "off",
  react/prop-types: "off"
*/

import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import IconButton from "react-mdl/lib/IconButton";
import PropTypes from "prop-types";
// import Checkbox from "react-mdl/lib/Checkbox";
// import cn from "classnames";

import s from "./Login.less"; // eslint-disable-line
// import Avatar from "../../../components/Avatar/index";
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";
import Block from "../../../submodules/uikit/src/UIKit/Elements/Block";
import RaisedButton from "../../../submodules/uikit/src/UIKit/Elements/RaisedButton";
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";
import Checkbox from "../../../submodules/uikit/src/UIKit/Elements/CheckBox";

class EnterPassword extends React.Component {
  static propTypes = {
    onResetInputEmail: PropTypes.func,
    onInputPassword: PropTypes.func,
    onLogin: PropTypes.func,
    onForgotPassword: PropTypes.func,
    error: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  };
  static defaultProps = {
    onResetInputEmail: () => {},
    onInputPassword: () => {},
    onForgotPassword: () => {},
    onLogin: () => {},
    error: "",
    name: "",
    email: "",
  };
  onHandleSubmit = e => {
    e.preventDefault();
  };
  onForgotPasswordClick = e => {
    e.preventDefault();
    this.props.onForgotPassword();
  };
  render() {
    const inputError = {
      borderBottomColor: "red",
    };

    return (
      <Block>
        {/* <div className={cn(s.wrap)}> */}

        <div style={{ marginBottom: 20, position: "relative" }}>
          <IconButton
            className={s.backButton}
            name="arrow_back"
            onClick={this.props.onResetInputEmail}
          />

          <div style={{ marginBottom: 15 }}>
            <div className={s.description} style={{ marginTop: 0 }}>
              Welcome back,
            </div>
          </div>

          <div className={s.avatarWrap}>
            <Avatar className={s.avatar} />
          </div>
          <div className={s.description} style={{ color: "black" }}>
            {/* Name */}
            {/* Not a Basement Studio */}
            {this.props.name}
          </div>
          <div className={s.description} style={{ marginTop: 0 }}>
            {/* Email */}
            {/* yolo@notabasement.com */}
            {this.props.email}
          </div>
        </div>

        <form onSubmit={this.onHandleSubmit}>
          <div
            className={s.formGroup}
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <input
              className={s.input}
              type="password"
              autoFocus
              placeholder="Enter your password..."
              onChange={e => this.props.onInputPassword(e.target.value)}
              /* Input error */
              style={this.props.error && this.props.error !== null ? inputError : {}}
            />
            {/* Input error */}
            <div className={s.errorText}>
              {/* Wrong password */}
              {this.props.error && this.props.error !== null ? "Wrong password" : ""}
            </div>
          </div>
          <div className={s.formGroup}>
            <RaisedButton style={{ width: "100%" }} type="submit" onClick={this.props.onLogin}>
              Log in
            </RaisedButton>
          </div>

          <div
            className={s.formGroup}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Checkbox
              className={s.checkbox}
              label="Stay signed in"
              labelClass={s.checkBoxLabelClass}
              checked={this.props.staySignedIn}
              onClick={this.props.onCheckStaySignIn}
            />
            <FlatButton onClick={this.onForgotPasswordClick}>FORGOT PASSWORD?</FlatButton>
          </div>
        </form>
      </Block>
    );
  }
}

export default withStyles(s)(EnterPassword);
