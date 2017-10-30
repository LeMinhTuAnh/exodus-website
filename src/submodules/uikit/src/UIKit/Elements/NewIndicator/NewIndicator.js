import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./NewIndicator.scss";

import colorCode from "../../utils/colorCode";

class NewIndicator extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: "",
    color: "",
    style: {},
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, color, style, ...props } = this.props;

    const iconStyle = { ...style, backgroundColor: colorCode(color) };

    return <div className={cn(s.root, className)} style={iconStyle} {...props} />;
  }
}

export default withStyles(s)(NewIndicator);
