/* eslint
    react/prop-types: "off",
    css-modules/no-unused-class: "off",
    react/no-unused-prop-types: "off",
    max-len: "off",
    prefer-const: "off",
    no-unused-vars: "off",
    react/require-default-props: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "../resources/account.less";

// submodules
import RaisedButton from "../../../submodules/uikit/src/UIKit/Elements/RaisedButton";
import Icon from "../../../submodules/uikit/src/UIKit/Elements/Icon";
// import Link from "../../../submodules/uikit/src/UIKit/Elements/Link";
import Avatar from "../../../submodules/uikit/src/UIKit/Components/Avatar";

import { multiClass } from "../../../helper/utils";

class AccountComponent extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    clasName: PropTypes.string,
    viewAccount: PropTypes.func,
  };

  static defaultProps = {
    viewAccount: () => {},
  };

  handleViewAccountClick = () => {
    this.props.viewAccount();

    if (this.props.onHideMenu) {
      this.props.onHideMenu();
    }
  };

  render() {
    let { className, user = {} } = this.props;
    className = multiClass(className);

    const { profilePic = {} } = user;
    let isEmailVerified = true;

    if (user.email && !user.emailVerified) isEmailVerified = false;
    // const isEmailVerified = user.email && user.emailVerified;
    // console.log(isEmailVerified);

    return (
      <div className={s["account-info"]}>
        <Avatar style={{ width: 80, height: 80 }} src={profilePic.url} />
        <div style={{ paddingLeft: 14 }}>
          <div className={s["account-username"]}>
            {isEmailVerified ? user.fullName : user.nameTag || user.username}
          </div>
          <div className={s.accountNickname}>
            {!isEmailVerified
              ? <div className={s.emailVerifyText}>
                <Icon color="#ff5722" name="warning" style={{ fontSize: 14 }} />
                <span className={s["warning-text"]}>Email verification required</span>
              </div>
              : <div className="text-muted">
                  @{user.nameTag || user.username}
              </div>}
          </div>

          <RaisedButton onClick={this.handleViewAccountClick}>VIEW ACCOUNT</RaisedButton>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AccountComponent);
