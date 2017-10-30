/* eslint
  no-unused-vars: "off",
  css-modules/no-unused-class: "off",
  max-len: "off",
  react/jsx-no-bind: "off",
  no-undef: "off",
  class-methods-use-this: "off",
  prefer-const: "off",
  react/no-unused-state: "off",
  react/jsx-closing-tag-location: "off",
  react/require-default-props: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
// import classnames from "classnames";

import history from "../../../core/history";
import s from "../resources/login.less";
import { login, facebookLogin, signup } from "../actions";

import ChooseLogin from "../components/ChooseLogin";
import EnterEmail from "../components/EnterEmail";
import EnterPassword from "../components/EnterPassword";
import SignUp from "../components/SignUp";

import Button from "../../../submodules/uikit/src/UIKit/Elements/Button";
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "../../../submodules/uikit/src/UIKit/Components/Dialog";

import Parse from "../../../helper/parseHelper";

// import { saveAuthSession } from "../../../server/helper/authHelper";
import { toggleIssuePicker } from "../../issue/actions";

import { isValidEmail } from "../../../helper/utils";

import * as REDUCERS from "../../../constants/reducers";

import fetch from "../../../core/fetch";
import {
  AJAX_CHECK_EXISTED_USER,
  AJAX_SIGNUP_USER,
  AJAX_RESET_PASSWORD,
} from "../../../constants/ajax";

const mapStateToProps = state => {
  const user = state[REDUCERS.REDUCER_USER].user || {};
  const error = state[REDUCERS.REDUCER_USER].error || "";
  return {
    user,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  async login(username, password) {
    return new Promise(resolve => {
      dispatch(login(username, password, () => resolve()));
    });
  },
  async facebookLogin(sessionToken = "") {
    dispatch(facebookLogin(sessionToken));
    return new Promise(resolve => {
      dispatch(facebookLogin(sessionToken, () => resolve()));
    });
  },
  async signup(email, password) {
    dispatch(signup(email, password));
  },
  toggleIssuePicker: (open = false) => dispatch(toggleIssuePicker(open)),
});

class LoginPage extends React.Component {
  static propTypes = {
    login: PropTypes.func,
    signup: PropTypes.func,
    facebookLogin: PropTypes.func,
    toggleIssuePicker: PropTypes.func,
    // cbUrl: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.object,
    error: PropTypes.string,
  };

  static defaultProps = {
    user: {},
    error: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      email: "",
      password: "",
      isInputEmail: false,
      error: props.error,
      staySignedIn: true,
    };
  }

  componentWillMount() {
    const { user = {} } = this.props;
    if (Object.values(user).length > 0 && user.objectId) {
      history.goBack();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error });
  }
  componentWillUnmount() {
    // IN CASE USER DON'T WANT TO LOGIN;
    if (this.state.resetIssueOpenDialog !== false) {
      this.props.toggleIssuePicker(false);
    }
  }

  async onLogin() {
    let { email } = this.state;
    const { password } = this.state;
    email = email.toLowerCase();
    await this.props.login(email, password);
    this.setState({ resetIssueOpenDialog: false });

    if (this.props.error) {
      console.log(this.props.error);
      return;
    }
    // IN CASE USER NEED LOGIN TO REPORT ISSUE
    // history.push("/");
    history.goBack();
  }

  async onTwitterLogin() {
    const { callbackRoute = "" } = this.props;
    if (callbackRoute) {
      window.location = `${window.location.origin}/ajax/login/twitter?callbackURI=${callbackRoute}`;
    } else {
      window.location = `${window.location.origin}/ajax/login/twitter`;
    }
  }

  async onFacebookLogin() {
    if (Parse.User.current()) {
      await Parse.User.logOut();
    }

    Parse.FacebookUtils.logIn("email", {
      success: user => {
        if (!user.existed) {
          FB.api("/me?fields=name,email", me => {
            user.set("displayName", me.name);
            user.set("email", me.email);
            user.save();
          });
        }
        const token = user.getSessionToken();
        if (token) {
          this.props.facebookLogin(token);
          // DISABLE RESET ISSUE DIALOG
          this.setState({ resetIssueOpenDialog: false });
        }
        history.goBack();
      },
      error: (user, error) => {
        console.log(error);
      },
    });
  }

  onInputEmailClick = () => {
    this.setState({ isInputEmail: true });
  };

  onInputEmail = email => {
    this.setState({ email });
  };

  async onSubmitEmail() {
    let { email = "" } = this.state;
    email = email.toLowerCase();
    if (!isValidEmail(email)) return;
    const url = `${AJAX_CHECK_EXISTED_USER}/${email}`;
    const response = await fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "include",
      },
    });
    const result = await response.json();
    const { code, data = {} } = result;
    const { username } = data;
    this.setState({ isInputEmail: false });
    if (username) {
      this.setState({ existedUser: data, isSignIn: true });
    } else {
      this.setState({ isSignUp: true });
    }
  }

  onResetInputEmail = () => {
    this.setState({
      existedUser: {},
      isSignIn: false,
      isSignUp: false,
      isInputEmail: true,
      // email: "",
      isResetPasswordSent: false,
      error: null,
    });
  };

  onInputPassword = password => {
    this.setState({ password });
  };

  onInputSignUpPassword = signUpPassword => {
    this.setState({ signUpPassword });
  };
  onInputSignUpPasswordConfirm = signUpPasswordConfirm => {
    this.setState({ signUpPasswordConfirm });
  };
  onCheckStaySignIn = () => {
    this.setState({
      staySignedIn: !this.state.staySignedIn,
    });
  }

  onForgotPasswordClick = () => {
    console.log("onForgotPassword clicked");
    this.onOpenDialog();
  };
  async onResetPassword() {
    let { email } = this.state;
    email = email.toLowerCase();
    const response = await fetch(AJAX_RESET_PASSWORD, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
    const { code, data } = result;
    if (code !== 0) {
      console.log("something went wrong", data);
    }
    this.setState({ isResetPasswordSent: true });
  }
  onCloseResetPassword = () => {
    this.setState({ isResetPasswordSent: false });
    this.onCloseDialog();
  };
  onOpenDialog = () => {
    this.setState({ showForgotPasswordDialog: true });
  };
  onCloseDialog = () => {
    this.setState({ showForgotPasswordDialog: false });
  };

  async onCreateAccount() {
    const { signUpPassword = "", signUpPasswordConfirm = "", email } = this.state;

    if (signUpPassword.trim().length < 6) {
      this.setState({
        passwordError: "Password must contain more than 6 characters",
      });
      return;
    }
    this.setState({ passwordError: "" });

    if (signUpPassword.trim() !== signUpPasswordConfirm.trim()) {
      this.setState({ confirmPasswordError: "Password do not match" });
      return;
    }
    this.setState({ confirmPasswordError: "" });

    const result = await this.props.signup(email, signUpPassword);
    history.push("/account/email_verify");
  }

  render() {
    const { user } = this.props;
    const {
      email,
      password,
      isInputEmail,
      existedUser = {},
      isSignIn,
      isSignUp,
      signUpPassword = "",
      signUpPasswordConfirm = "",
      passwordError = "",
      confirmPasswordError = "",
      isResetPasswordSent,
      error = "",
    } = this.state;

    if (isInputEmail) {
      return (
        <div className={s.root}>
          <div className={s.container}>
            <h1 className={s.title}>{this.props.title}</h1>
            &nbsp;
            <EnterEmail
              onInputEmail={this.onInputEmail}
              onSubmitEmail={this.onSubmitEmail.bind(this)}
              email={email}
            />
          </div>
        </div>
      );
    }

    if (isSignIn) {
      return (
        <div className={s.root}>
          <Dialog show={this.state.showForgotPasswordDialog}>
            <DialogTitle>
              {isResetPasswordSent ? "Email Sent" : "Reset password"}
            </DialogTitle>
            <DialogContent>
              {isResetPasswordSent
                ? <div style={{ fontWeight: "normal" }}>
                    Your reset password email has been sent. Please check your inbox and continue.
                  </div>
                : <div style={{ fontWeight: "normal" }}>
                  {`An email with instruction on how to reset your password will be sent to your email ${email}`}
                </div>}
            </DialogContent>
            <DialogActions>
              {isResetPasswordSent
                ? <FlatButton onClick={this.onCloseResetPassword}>OK</FlatButton>
                : <div>
                  <FlatButton onClick={this.onCloseDialog}>Cancel</FlatButton>
                  <FlatButton onClick={this.onResetPassword.bind(this)}>Send</FlatButton>
                </div>}
            </DialogActions>
          </Dialog>

          <div className={s.container}>
            <h1 className={s.title}>{this.props.title}</h1>
            &nbsp;
            <EnterPassword
              onResetInputEmail={this.onResetInputEmail}
              onInputPassword={this.onInputPassword}
              onLogin={this.onLogin.bind(this)}
              onForgotPassword={this.onForgotPasswordClick}
              error={error}
              name={existedUser.fullName}
              email={existedUser.username}
              staySignedIn={this.state.staySignedIn}
              onCheckStaySignIn={this.onCheckStaySignIn}
            />
          </div>
        </div>
      );
    }

    if (isSignUp) {
      return (
        <div className={s.root}>
          <div className={s.container}>
            <h1 className={s.title}>{this.props.title}</h1>
            &nbsp;
            <SignUp
              onResetInputEmail={this.onResetInputEmail}
              email={email}
              signUpPassword={signUpPassword}
              signUpPasswordConfirm={signUpPasswordConfirm}
              passwordError={passwordError}
              confirmPasswordError={confirmPasswordError}
              onInputSignUpPassword={this.onInputSignUpPassword}
              onInputSignUpPasswordConfirm={this.onInputSignUpPasswordConfirm}
              onCreateAccount={this.onCreateAccount.bind(this)}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>{this.props.title}</h1>
          &nbsp;
          <ChooseLogin
            onFacebookLogin={this.onFacebookLogin.bind(this)}
            onInputEmailClick={this.onInputEmailClick}
            onTwitterLogin={this.onTwitterLogin.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(LoginPage));
