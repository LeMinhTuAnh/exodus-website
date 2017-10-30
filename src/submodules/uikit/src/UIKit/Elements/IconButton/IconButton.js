import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Button from "../Button";
import Icon from "../Icon";

import s from "./IconButton.oscss";

import colorCode from "../../utils/colorCode";

class IconButton extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bgColor: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    iconColor: null,
    bgColor: null,
    disabled: false,
    style: {},
    iconSize: null,
  };

  render() {
    const {
      className,
      style,
      bgColor,
      iconColor,
      iconSize,
      icon,
      disabled,
      ...otherProps
    } = this.props;

    const classes = cn("mdl-button--icon", className);

    const buttonStyle = Object.assign(
      {},
      style,
      bgColor && !disabled && { backgroundColor: colorCode(bgColor) },
      iconColor && !disabled && { color: colorCode(iconColor) },
    );

    const IconStyle = iconSize ? { fontSize: iconSize } : {};

    return (
      <Button className={classes} {...otherProps} style={buttonStyle} disabled={disabled} ripple>
        <Icon style={IconStyle} name={icon} />
      </Button>
    );
  }
}

export default withStyles(s)(IconButton);
