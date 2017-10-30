/* eslint-disable react/require-default-props */

import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import mdlUpgrade from "../../utils/mdlUpgrade";
import makeid from "../../utils/makeId";

import s from "./CheckBox.scss";

class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onChange: PropTypes.func,
    labelClass: PropTypes.string,
    labelStyle: PropTypes.object,
  };

  static defaultProps = {
    labelClass: "",
    labelStyle: {},
  }

  constructor(props) {
    super(props);

    this.id = makeid(5);
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      const fnName = this.props.disabled ? "disable" : "enable";
      ReactDOM.findDOMNode(this).MaterialCheckbox[fnName]();
    }
    if (this.props.checked !== prevProps.checked) {
      const fnName = this.props.checked ? "check" : "uncheck";
      ReactDOM.findDOMNode(this).MaterialCheckbox[fnName]();
    }
  }

  render() {
    // TODO input / label class(style)
    const { className, label, labelStyle, labelClass, ...inputProps } = this.props;

    const classes = cn("mdl-checkbox mdl-js-checkbox", "mdl-js-ripple-effect", className);

    return (
      <label className={classes} htmlFor={this.id}>
        <input id={this.id} type="checkbox" className="mdl-checkbox__input" {...inputProps} />
        {label &&
          <span className={cn("mdl-checkbox__label", s.label, labelClass)} style={labelStyle}>
            {label}
          </span>}
      </label>
    );
  }
}

export default withStyles(s)(mdlUpgrade(Checkbox, true));
