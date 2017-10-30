import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classNames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import mdlUpgrade from "../../utils/mdlUpgrade";

import pattern from "./pattern";

import s from "./TextField.oscss";

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.node,
  floatingLabel: PropTypes.bool,
  // eslint-disable-next-line
  id: (props, propName, componentName) => {
    const { id } = props;
    if (id && typeof id !== "string") {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. \`${propName}\` should be a string. Validation failed.`,
      );
    }
    if (!id && typeof props.label !== "string") {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. \`${propName}\` is required when label is an element. Validation failed.`,
      );
    }
    return null;
  },
  inputClassName: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  maxRows: PropTypes.number,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
};

class Textfield extends React.Component {
  static defaultProps = {
    className: null,
    disabled: false,
    error: null,
    floatingLabel: null,
    inputClassName: null,
    maxRows: 0,
    onChange: () => {},
    required: false,
    rows: 0,
    style: {},
    value: null,
    type: "text",
  };

  componentDidUpdate(prevProps) {
    if (this.props.required !== prevProps.required || this.props.error !== prevProps.error) {
      ReactDOM.findDOMNode(this).MaterialTextfield.checkValidity();
    }
    if (this.props.disabled !== prevProps.disabled) {
      ReactDOM.findDOMNode(this).MaterialTextfield.checkDisabled();
    }
    if (this.props.value !== prevProps.value && this.inputRef !== document.activeElement) {
      ReactDOM.findDOMNode(this).MaterialTextfield.change(this.props.value);
    }
    if (this.props.error) {
      // Every time the input gets updated by MDL (checkValidity() or change())
      // its invalid class gets reset.
      // We have to put it again if the input is specifically set as "invalid"
      this.setAsInvalid();
    }
  }

  setAsInvalid() {
    const elt = ReactDOM.findDOMNode(this);
    if (elt.className.indexOf("is-invalid") < 0) {
      elt.className = classNames(elt.className, "is-invalid");
    }
  }

  render() {
    const {
      className,
      inputClassName,
      id,
      error,
      floatingLabel,
      label,
      maxRows,
      rows,
      style,
      type,
      ...otherProps
    } = this.props;

    const hasRows = !!rows;
    const customId = id || `textfield-${label.replace(/[^a-z0-9]/gi, "")}`;
    const inputTag = hasRows || maxRows > 1 ? "textarea" : "input";

    const inputProps = {
      className: classNames("mdl-textfield__input", inputClassName),
      id: customId,
      rows,
      ref: c => (this.inputRef = c),
      type,
      ...otherProps,
    };

    if (pattern(type)) {
      Object.assign(inputProps, { pattern: pattern(type) });
    }

    const input = React.createElement(inputTag, inputProps);
    const labelContainer = (
      <label className="mdl-textfield__label" htmlFor={customId}>
        {label}
      </label>
    );
    const errorContainer =
      !!error &&
      <span className="mdl-textfield__error">
        {error}
      </span>;

    const containerClasses = classNames(
      "mdl-textfield mdl-js-textfield",
      {
        "mdl-textfield--floating-label": floatingLabel,
      },
      className,
    );

    return (
      <div className={containerClasses} style={style}>
        {input}
        {labelContainer}
        {errorContainer}
      </div>
    );
  }
}

Textfield.propTypes = propTypes;

export default withStyles(s)(mdlUpgrade(Textfield));
