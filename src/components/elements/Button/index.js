import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import style from "./style.less";


class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    bsStyle: PropTypes.string,
    children: PropTypes.any.isRequired,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    colored: PropTypes.bool,
  }

  static defaultProps = {
    className: "",
    bsStyle: "",
    primary: false,
    accent: false,
    colored: false,
  }

  render = () => {
    const { className, bsStyle, children, primary, accent, colored, ...props } = this.props;
    const buttonClasses = classNames("mdl-button mdl-js-button", {
      "mdl-js-ripple-effect": true,
      "mdl-button--raised": true,
      "mdl-button--colored": colored || !!bsStyle,
      "mdl-button--primary": primary,
      "mdl-button--accent": accent,

    }, className);
    const classes = classNames(style.mdlButton, className, style[bsStyle], buttonClasses);
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }
}

export default withStyles(style)(Button);
