import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./Dialog.scss";

class Dialog extends React.PureComponent {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className, show, ...otherProps } = this.props;

    if (!show) return null;

    return (
      <div className={s.overlay}>
        <div className={cn(s.root, className)} {...otherProps}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Dialog);
