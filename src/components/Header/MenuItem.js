import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../submodules/uikit/src/UIKit/Elements/Link";

import s from "./MenuItem.scss";

class MenuItem extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
  };

  static defaultProps = {
    className: "",
    onClick: () => {},
  };

  static contextTypes = {
    path: PropTypes.string.isRequired,
  };
  onCheckActive = (route = "") => {
    const { path } = this.context;
    return path === route;
  };
  render() {
    const { to = "", className, onClick } = this.props;
    const activeClass = this.onCheckActive(to) ? s.active : "";
    const classname = cn(className, activeClass);
    return (
      <Link to={to} className={classname} onClick={onClick}>
        {this.props.children}
      </Link>
    );
  }
}

export default withStyles(s)(MenuItem);
