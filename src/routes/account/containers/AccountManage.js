import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";

import Parse from "../../../helper/parseHelper";
import history from "../../../core/history";
import s from "../resources/account.less"; // eslint-disable-line
import { login, facebookLogin } from "../actions";

// import Link from "../../../components/elements/Link";
// import Avatar from "../../../components/Avatar/index";

import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";
import Link from "../../../submodules/uikit/src/UIKit/Elements/Link";
import Block from "../../../submodules/uikit/src/UIKit/Elements/Block";
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";

import * as REDUCERS from "../../../constants/reducers";

import { multiClass } from "../../../helper/utils";

import fetch from "../../../core/fetch";
import * as AJAX from "../../../constants/ajax";

const mapStateToProps = state => {
  const user = state[REDUCERS.REDUCER_USER].user || {};
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

class AccountManage extends React.Component {
  static propTypes = {
    // title: PropTypes.string,
    user: PropTypes.object,
  };
  static defaultProps = {
    user: {},
    // title: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      email: "",
      password: "",
    };
  }

  onLogout = async () => {
    if (Parse.User.current()) {
      await Parse.User.logOut();
    }

    await fetch(AJAX.AJAX_LOGOUT_USER, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    window.location.href = "/";
  };

  onViewIssue = e => {
    e.preventDefault();
    history.push("/issue");
  };

  render() {
    const { user = {} } = this.props;
    const { profilePic = {} } = user;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.avatarWrap}>
            <Avatar className={s.avatar} src={profilePic.url} />
          </div>

          <div className={s["label-text"]}> Personal info </div>
          <Block>
            <div className={s["small-text"]}>Full Name</div>
            <div className={s["value-text"]}>
              {user.fullName}
            </div>

            <div className={s["small-text"]}>Email</div>
            <div className={s["value-text"]}>
              {user.email}
            </div>

            <div className={s["small-text"]}>Username</div>
            <div className={s["value-text"]}>
              @{user.nameTag || user.username}
            </div>
          </Block>

          <div className={s["label-small-text"]} style={{ marginTop: 10 }}>
            To edit account, go to&nbsp;
            <span
              className={multiClass(s.clickable, s.uppercase)}
              style={{ fontWeight: 500, color: "#26a6f3", cursor: "auto" }}
            >
              manga rock app
            </span>
          </div>

          <div className={s["label-text"]} style={{ marginTop: 40 }}>
            Contributions
          </div>
          <Block>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>Report issues</div>
                <div className={s["small-text"]} style={{ marginTop: 0 }}>
                  All issues you reported for Manga Rock
                </div>
              </div>
              <Link
                style={{ color: "#26a6f3" }}
                className={multiClass(s.clickable, s.uppercase)}
                onClick={this.onViewIssue}
                to="/issue"
              >
                view
              </Link>
            </div>
          </Block>

          <div className={s.divider} />

          <Block noPadding>
            <FlatButton
              onClick={this.onLogout}
              color={"#e82d2d"}
              style={{ width: "100%" }}
            >
              Sign Out
            </FlatButton>
          </Block>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(s)(AccountManage),
);
