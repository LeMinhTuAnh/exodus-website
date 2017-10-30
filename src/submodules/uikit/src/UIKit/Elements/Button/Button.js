import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import mdlUpgrade from "../../utils/mdlUpgrade";

class Button extends React.Component {
  static propTypes = {
    accent: PropTypes.bool,
    className: PropTypes.string,
    colored: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]).isRequired,
  };

  static defaultProps = {
    accent: false,
    className: "",
    colored: false,
    component: null,
    primary: false,
    raised: false,
    ripple: false,
  };

  render() {
    const {
      accent,
      className,
      colored,
      primary,
      raised,
      ripple,
      component,
      children,
      ...otherProps
    } = this.props;

    const buttonClasses = classNames(
      "mdl-button mdl-js-button",
      {
        "mdl-js-ripple-effect": ripple,
        "mdl-button--raised": raised,
        "mdl-button--colored": colored,
        "mdl-button--primary": primary,
        "mdl-button--accent": accent,
      },
      className,
    );

    return React.createElement(
      component || "button",
      {
        className: buttonClasses,
        ...otherProps,
      },
      children,
    );
  }
}

export default mdlUpgrade(Button);
