import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import cn from "classnames";

// import { Menu, MenuItem } from "../../Components/Menu";
// import Link from "../../Elements/Link";
// import Icon from "../../Elements/Icon";
// import IconButton from "../../Elements/IconButton";
// import Search from "../Search";
// import SideBar from "./SideBar";

// import MR_LOGO_URL from "../../svg/mr_logo.svg";

import s from "./Header.scss";

class Header extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <div className={s.root} {...otherProps}>
        <div className={s.wrap}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
