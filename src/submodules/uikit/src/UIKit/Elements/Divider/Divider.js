import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./Divider.scss";

class Divider extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    vertical: PropTypes.bool,
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    vertical: false,
    horizontal: false,
  };

  render() {
    const { className, vertical, horizontal, ...otherProps } = this.props;
    let element;

    if (horizontal) {
      element = <hr className={cn(s.vertical, className)} {...otherProps} />;
    }

    if (vertical) {
      element = <div className={cn(s.horizontal, className)} />;
    }
    return element;
  }
}

export default withStyles(s)(Divider);
