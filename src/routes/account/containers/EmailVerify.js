/* eslint
  no-unused-vars: "off",
  css-modules/no-unused-class: "off",
  max-len: "off",
  react/jsx-no-bind: "off",
  react/no-unused-prop-types: "off",
  class-methods-use-this: "off",
  react/require-default-props: "off"
*/

import React from "react";
import PropTypes from "prop-types";

import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";

// import classnames from "classnames";
// import { Modal } from "react-bootstrap";

import history from "../../../core/history";
import s from "../resources/account.less";
import { login, facebookLogin } from "../actions";

// import Link from "../../../components/elements/Link";
// import Avatar from "../../../components/Avatar/index";
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../../submodules/uikit/src/UIKit/Components/Dialog";

import ProblemVerifyEmail from "../components/ProblemVerifyEmail";
import ResendEmailSuccess from "../components/ResendEmailSuccess";

// import { saveAuthSession } from "../../../server/helper/authHelper";

import * as REDUCERS from "../../../constants/reducers";

import { multiClass } from "../../../helper/utils";

import Parse from "../../../helper/parseHelper";

import fetch from "../../../core/fetch";
import * as AJAX from "../../../constants/ajax";

const mapStateToProps = state => {
  const user = state[REDUCERS.REDUCER_USER].user || {};
  // const user = state[REDUCERS.REDUCER_USER] || {};
  return {
    user,
  };
};

const mapDispatchToProps = dispatch => ({
  async login(username, password, cbUrl = "") {
    dispatch(login(username, password, cbUrl));
  },
  async facebookLogin(sessionToken = "") {
    dispatch(facebookLogin(sessionToken));
  },
});

class EmailVerify extends React.Component {
  static propTypes = {
    // title: PropTypes.string,
    user: PropTypes.object,
  };
  static defaultProps = {
    user: {},
  };
  constructor(props) {
    super(props);

    this.state = {
      isResendEmail: true,
      showDialog: false,
    };
  }
  onOpenDialog = () => {
    this.setState({ showDialog: true });
  };
  onCloseDialog = () => {
    this.setState({ showDialog: false });
  };

  onProblemClick = e => {
    e.preventDefault();
    this.onOpenDialog();
  };

  async onResendEmail() {
    const response = await fetch(AJAX.AJAX_REQUEST_EMAIL_VERIFIED, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const result = await response.json();
    console.log(result);

    this.setState({ isResendEmail: false });
  }

  onCloseResendClick = () => {
    this.setState({ isResendEmail: true });
    this.onCloseDialog();
  };

  async onLogout() {
    if (Parse.User.current()) {
      await Parse.User.logOut();
    }

    const result = await fetch(AJAX.AJAX_LOGOUT_USER, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    window.location.href = "/account/login";
  }

  render() {
    const { user = {} } = this.props;
    const { profilePic = {}, username, email, country, objectId } = user;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div
            className={s.avatarWrap}
            style={{ marginBottom: 0, marginTop: 50 }}
          >
            <Avatar className={s.avatar} src={profilePic.url} />
          </div>

          <div
            className={multiClass(s["text-center"], s["email-title"])}
            style={{ marginBottom: 40 }}
          >
            {username}
          </div>

          <div
            className={multiClass(s["flex-center"], s["flex-column"], s.wrap)}
          >
            <Avatar
              src={"/images/account/email-verify.png"}
              style={{ width: 96, height: 96, marginTop: 20 }}
            />

            <div className={multiClass(s["email-title"])}>
              Email Verification Required
            </div>

            <div>&nbsp;</div>

            <div className={s["email-small-body"]}>
              We sent an email to &nbsp;
              {username}
              &nbsp; to make sure it belong to you. Please check your inbox to
              verify your email.
            </div>

            <FlatButton
              onClick={this.onProblemClick}
              style={{ color: "#26a6f3", marginTop: 25 }}
              className={multiClass(s.clickable, s.uppercase)}
            >
              &nbsp;having problems?&nbsp;
            </FlatButton>
          </div>

          <Dialog
            show={this.state.showDialog}
            // onHide={this.onCloseDialog}
          >
            <DialogContent>
              <div style={{ marginTop: 20 }}>
                {this.state.isResendEmail
                  ? <ProblemVerifyEmail
                    onResendEmailClick={this.onResendEmail.bind(this)}
                    onSignOutClick={this.onLogout.bind(this)}
                    email={email}
                    country={country}
                    userId={objectId}
                    onContactSupportClick={this.onCloseDialog}
                  />
                  : <ResendEmailSuccess
                    onButtonOkClick={this.onCloseResendClick}
                    email={email}
                  />}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(EmailVerify),
);
