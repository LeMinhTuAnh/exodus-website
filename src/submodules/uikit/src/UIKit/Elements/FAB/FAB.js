import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../Button";

import colorCode from "../../utils/colorCode";

import { FAB_DEFAULT_SIZE, FAB_SMALL_SIZE } from "../../constant/elements";

import Icon from "../Icon";

class FAB extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf([FAB_DEFAULT_SIZE, FAB_SMALL_SIZE]),
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    disabled: PropTypes.bool,
    bgColor: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    size: "default",
    iconName: "add",
    iconColor: null,
    disabled: false,
    bgColor: null,
    style: {},
  };

  render() {
    const {
      size,
      className,
      iconName,
      iconColor,
      disabled,
      style,
      bgColor,
      ...otherProps
    } = this.props;

    const iconColorStyle = iconColor && !disabled ? { color: colorCode(iconColor) } : {};

    const buttonStyle = Object.assign(
      {},
      style,
      bgColor && !disabled && { backgroundColor: colorCode(bgColor) },
    );

    const classes = classNames(
      "mdl-button--fab",
      "mdl-button--colored",
      {
        "mdl-button--mini-fab": size === "small",
      },
      className,
    );

    return (
      <Button className={classes} {...otherProps} disabled={disabled} style={buttonStyle} ripple>
        <Icon name={iconName} style={iconColorStyle} />
      </Button>
    );
  }
}

export default FAB;
