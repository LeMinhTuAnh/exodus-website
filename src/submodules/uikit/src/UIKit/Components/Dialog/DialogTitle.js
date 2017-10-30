import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./DialogTitle.scss";

class DialogTitle extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <h2 className={cn(s.root, className)} {...otherProps}>
        {children}
      </h2>
    );
  }
}

export default withStyles(s)(DialogTitle);
