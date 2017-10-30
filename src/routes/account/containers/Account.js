/* eslint
    no-unused-vars: "off",
    react/prop-types: "off",
    react/no-string-refs: "off",
    react/require-default-props: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
// import classnames from "classnames";

import * as REDUCERS from "../../../constants/reducers";

import AccountComponent from "../components/AccountComponent";

// submodules
import RaisedButton from "../../../submodules/uikit/src/UIKit/Elements/RaisedButton";
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";
import { PopoverContainer, Popover } from "../../../submodules/uikit/src/UIKit/Components/Popover";

import { login } from "../actions";

import history from "../../../core/history";

const accountMobileStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: 128,
  paddingLeft: 20,
};

const avatarMobileStyle = {
  width: 80,
  height: 80,
  marginRight: 20,
  border: 0,
};

const mapStateToProps = state => {
  const user = state[REDUCERS.REDUCER_USER].user || {};
  return {
    user,
  };
};

const mapDispatchToProps = dispatch => ({
  async login(username, password) {
    dispatch(login(username, password));
  },
});

class Account extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    mobile: PropTypes.bool,
  };

  static defaultProps = {
    mobile: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      email: "",
      password: "",
    };
  }

  onInputEmail = email => {
    this.setState({ email });
  };

  onInputPassword = password => {
    this.setState({ password });
  };

  async onLogin() {
    const { email, password } = this.state;
    const result = await this.props.login(email, password);
    this.hideLoginModal();
  }

  onViewAccount = () => {
    // this.refs.accountOverlay.hide();
    const { user = {} } = this.props;

    if (user.email && !user.emailVerified) {
      return history.push("/account/email_verify");
    }
    return history.push("/account/manage_account");
  };

  handleMobileSignInClick = () => {
    if (this.props.onHideMenu) {
      this.props.onHideMenu();
    }

    history.push("/account/login");
  };

  showLoginModal = () => {
    // this.setState({ showLoginModal: true });
    history.push("/account/login");
  };

  hideLoginModal = () => {
    this.setState({ showLoginModal: false });
  };

  render() {
    const { user = {}, mobile } = this.props;
    const { profilePic = {} } = user;
    const isLogged = Object.keys(user).length > 0;

    let account = null;

    // Desktop account in navigation bar
    if (!mobile) {
      // Logged in
      if (isLogged) {
        account = (
          <PopoverContainer align="right">
            <Avatar id="avatar-menu" src={profilePic.url} style={{ width: 40, height: 40 }} />
            <Popover target="avatar-menu" align="right" width={300}>
              <AccountComponent user={user} viewAccount={this.onViewAccount} />
            </Popover>
          </PopoverContainer>
        );

        // Desktop account in navigation bar NOT Logged in
      } else {
        account = (
          <RaisedButton style={{ width: 90 }} onClick={this.handleMobileSignInClick}>
            SIGN IN
          </RaisedButton>
        );
      }

      // Mobile account in collapse menu when logged in
    } else if (isLogged) {
      account = (
        <div style={accountMobileStyle}>
          <AccountComponent
            onHideMenu={this.props.onHideMenu}
            user={user}
            viewAccount={this.onViewAccount}
          />
        </div>
      );

      // Mobile account in collapse menu when NOT logged in
    } else {
      account = (
        <div style={accountMobileStyle}>
          <Avatar style={avatarMobileStyle} />
          <RaisedButton onClick={this.handleMobileSignInClick}>SIGN IN</RaisedButton>
        </div>
      );
    }

    return (
      <div>
        {account}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles()(Account));
