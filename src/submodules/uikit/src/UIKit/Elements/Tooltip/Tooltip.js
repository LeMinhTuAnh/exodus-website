import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import MDLComponent from "../../utils/MDLComponent";

import s from "./Tooltip.oscss";

class Tooltip extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired,
    position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  };

  static defaultProps = {
    position: "bottom",
  };

  render() {
    const { label, children, position, ...otherProps } = this.props;
    const id = Math.random().toString(36).substr(2);

    const newLabel =
      typeof label === "string"
        ? (<span>
          {label}
        </span>)
        : label;

    let element;
    if (typeof children === "string") {
      element = (
        <span>
          {children}
        </span>
      );
    } else {
      element = React.Children.only(children);
    }

    return (
      <div style={{ display: "inline-block" }} {...otherProps}>
        {React.cloneElement(element, { id })}
        <MDLComponent>
          {React.cloneElement(newLabel, {
            htmlFor: id,
            className: classNames("mdl-tooltip", {
              [`mdl-tooltip--${position}`]: typeof position !== "undefined",
            }),
          })}
        </MDLComponent>
      </div>
    );
  }
}

export default withStyles(s)(Tooltip);
