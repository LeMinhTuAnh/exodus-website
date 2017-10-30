import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Button from "../Button";
import Icon from "../Icon";

import s from "./FlatButton.scss";

import colorCode from "../../utils/colorCode";

class FlatButton extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    textBefore: PropTypes.bool,
    style: PropTypes.object,
    color: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    textBefore: false,
    style: {},
    color: null,
    icon: null,
    disabled: false,
  };

  render() {
    const {
      children,
      style,
      textBefore,
      className,
      color,
      icon,
      disabled,
      ...otherProps
    } = this.props;

    const classes = cn(s.root, className);

    const buttonStyle = Object.assign({}, style, color && !disabled && { color: colorCode(color) });

    return (
      <Button className={classes} style={buttonStyle} {...otherProps} disabled={disabled} ripple>
        {!textBefore && icon && <Icon name={icon} className={cn(s.icon, s.left)} />}
        <span>
          {children}
        </span>
        {textBefore && icon && <Icon name={icon} className={cn(s.icon, s.right)} />}
      </Button>
    );
  }
}

export default withStyles(s)(FlatButton);
