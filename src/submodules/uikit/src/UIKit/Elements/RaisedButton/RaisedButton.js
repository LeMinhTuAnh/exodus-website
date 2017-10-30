import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Button from "../Button";
import Icon from "../Icon";

import s from "./RaisedButton.scss";

import colorCode from "../../utils/colorCode";

class RaisedButton extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    textBefore: PropTypes.bool,
    style: PropTypes.object,
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    textBefore: false,
    style: {},
    textColor: null,
    bgColor: null,
    icon: null,
    disabled: false,
  };

  render() {
    const {
      children,
      style,
      textBefore,
      className,
      textColor,
      bgColor,
      icon,
      disabled,
      ...otherProps
    } = this.props;

    const classes = cn(s.root, className);

    const buttonStyle = Object.assign(
      {},
      style,
      textColor && !disabled && { color: colorCode(textColor) },
      bgColor && !disabled && { backgroundColor: colorCode(bgColor) },
    );

    return (
      <Button
        className={classes}
        style={buttonStyle}
        disabled={disabled}
        ripple
        raised
        colored
        {...otherProps}
      >
        <div className={s.wrap}>
          {!textBefore && icon && <Icon name={icon} className={cn(s.icon, s.left)} />}
          <span>{children}</span>
          {textBefore && icon && <Icon name={icon} className={cn(s.icon, s.right)} />}
        </div>
      </Button>
    );
  }
}

export default withStyles(s)(RaisedButton);
