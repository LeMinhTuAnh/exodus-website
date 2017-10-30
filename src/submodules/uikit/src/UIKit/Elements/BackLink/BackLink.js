import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./BackLink.scss";

import Link from "../Link";
import Icon from "../Icon";

class BackLink extends React.PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { to, children, className, ...otherProps } = this.props;

    return (
      <Link to={to} className={cn(s.backLink, className)} {...otherProps}>
        <Icon className={s.icon} name="arrow_back" />
        <h4 className={s.text}>{children}</h4>
      </Link>
    );
  }
}

export default withStyles(s)(BackLink);
