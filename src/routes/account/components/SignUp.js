import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import IconButton from "react-mdl/lib/IconButton";
import PropTypes from "prop-types";
// import cn from "classnames";

import s from "./Login.less"; // eslint-disable-line
// import Avatar from "../../../components/Avatar/index";
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";
import RaisedButton from "../../../submodules/uikit/src/UIKit/Elements/RaisedButton";
import Block from "../../../submodules/uikit/src/UIKit/Elements/Block";

class SignUp extends React.Component {
  static propTypes = {
    onResetInputEmail: PropTypes.func,
    onCreateAccount: PropTypes.func,
    onInputSignUpPassword: PropTypes.func,
    onInputSignUpPasswordConfirm: PropTypes.func,
    signUpPassword: PropTypes.string,
    signUpPasswordConfirm: PropTypes.string,
    passwordError: PropTypes.string,
    confirmPasswordError: PropTypes.string,
    email: PropTypes.string,
  };
  static defaultProps = {
    onResetInputEmail: () => {},
    onCreateAccount: () => {},
    onInputSignUpPassword: () => {},
    onInputSignUpPasswordConfirm: () => {},
    signUpPassword: "",
    signUpPasswordConfirm: "",
    passwordError: "",
    confirmPasswordError: "",
    email: "",
  };
  onHandleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const inputError = {
      borderBottomColor: "red",
    };
    // console.log(this.props);
    return (
      <Block>
        <div style={{ marginBottom: 20, position: "relative" }}>
          <IconButton
            className={s.backButton}
            name="arrow_back"
            onClick={this.props.onResetInputEmail}
          />

          <div className={s.avatarWrap}>
            <Avatar className={s.avatar} />
          </div>
          <div className={s.description}>
            Looks like you do not have an account yet. Let us create a new one with this email.
          </div>
          <div className={s.description} style={{ color: "black", fontWeight: 500 }}>
            {this.props.email}
          </div>
        </div>

        <form onSubmit={this.onHandleSubmit}>
          <div className={s.formGroup}>
            <input
              className={s.input}
              type="password"
              // autoFocus
              placeholder="Enter your password..."
              value={this.props.signUpPassword}
              onChange={e => this.props.onInputSignUpPassword(e.target.value)}
              /* Input error */
              style={this.props.passwordError ? inputError : {}}
            />
            <div className={s.errorText}>
              {/* Password error message here */}
              {this.props.passwordError}
            </div>
          </div>

          <div className={s.formGroup}>
            <input
              className={s.input}
              type="password"
              placeholder="Re-enter your password..."
              value={this.props.signUpPasswordConfirm}
              onChange={e => this.props.onInputSignUpPasswordConfirm(e.target.value)}
              /* Input error */
              style={this.props.confirmPasswordError ? inputError : {}}
            />
            <div className={s.errorText}>
              {/* Password does not match */}
              {this.props.confirmPasswordError}
            </div>
          </div>

          <div className={s.formGroup}>
            <RaisedButton
              // className={cn(s.twitter, s.button)}
              style={{ textAlign: "center", width: "100%" }}
              type="submit"
              onClick={this.props.onCreateAccount}
            >
              Create Account
            </RaisedButton>
          </div>
        </form>
      </Block>
    );
  }
}

export default withStyles(s)(SignUp);
