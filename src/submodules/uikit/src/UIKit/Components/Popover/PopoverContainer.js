import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./PopoverContainer.oscss";

// TODO: implement 1 prop in this component, not repeat in Popover
// TODO: add bottom-left, top-left, top-right

class PopoverContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    valign: PropTypes.string,
    align: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    valign: "bottom",
    align: "left",
  };

  render() {
    const { children, className, valign, align, ...otherProps } = this.props;

    const rootClassNames = cn(
      "popover-container",
      `popover-container--${valign}-${align}`,
      className,
    );

    return (
      <div className={rootClassNames} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(PopoverContainer);
