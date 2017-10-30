/* eslint-disable react/require-default-props */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";
import ReactDOM from "react-dom";
import mdlUpgrade from "../../utils/mdlUpgrade";
import makeId from "../../utils/makeId";

import s from "./Switch.scss";
import ss from "./Switch.oscss";

class Switch extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    rightLabel: PropTypes.bool,
    darkTheme: PropTypes.bool,
  };

  static defaultProps = {
    label: null,
    className: null,
    rightLabel: false,
    darkTheme: false,
  };

  constructor(props) {
    super(props);

    this.id = makeId(5);
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      const fnName = this.props.disabled ? "disable" : "enable";
      ReactDOM.findDOMNode(this).MaterialSwitch[fnName]();
    }
    if (this.props.checked !== prevProps.checked) {
      const fnName = this.props.checked ? "on" : "off";
      ReactDOM.findDOMNode(this).MaterialSwitch[fnName]();
    }
  }

  render() {
    const { className, label, rightLabel, darkTheme, ...inputProps } = this.props;

    const classes = cn("mdl-switch mdl-js-switch", "mdl-js-ripple-effect", s.labelInput, className);

    return (
      <div className={cn(s.root, darkTheme && s.dark)}>
        {!rightLabel &&
          <div className={cn(s.label, s.left, this.props.disabled && s.disabled)}>YOLO</div>}
        <label htmlFor={this.id} className={classes}>
          <input id={this.id} type="checkbox" className="mdl-switch__input" {...inputProps} />
        </label>
        {rightLabel &&
          <div className={cn(s.label, s.right, this.props.disabled && s.disabled)}>YOLO</div>}
      </div>
    );
  }
}

export default withStyles(s, ss)(mdlUpgrade(Switch, true));
