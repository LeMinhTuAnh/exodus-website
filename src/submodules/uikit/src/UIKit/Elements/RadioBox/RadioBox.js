/* eslint-disable react/require-default-props */

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import mdlUpgrade from "../../utils/mdlUpgrade";
import makeId from "../../utils/makeId";

import s from "./RadioBox.scss";

class Radio extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    labelColor: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  static defaultProps = {
    labelColor: null,
  };

  constructor(props) {
    super(props);

    this.id = makeId(5);
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      const fnName = this.props.disabled ? "disable" : "enable";
      ReactDOM.findDOMNode(this).MaterialRadio[fnName]();
    }
    if (this.props.checked !== prevProps.checked) {
      const fnName = this.props.checked ? "check" : "uncheck";
      ReactDOM.findDOMNode(this).MaterialRadio[fnName]();
    }
  }

  render() {
    const { children, className, name, value, labelColor, ...inputProps } = this.props;

    const classes = cn("mdl-radio mdl-js-radio", "mdl-js-ripple-effect", className);

    const labelStyle = Object.assign({}, labelColor ? { color: labelColor } : {});

    return (
      <label className={classes} htmlFor={this.id}>
        <input
          id={this.id}
          type="radio"
          className="mdl-radio__button"
          value={value}
          name={name}
          {...inputProps}
        />
        <span className={cn("mdl-radio__label", s.label)} style={labelStyle}>
          {children}
        </span>
      </label>
    );
  }
}

export default withStyles(s)(mdlUpgrade(Radio, true));
