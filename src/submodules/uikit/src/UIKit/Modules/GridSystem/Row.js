/* eslint-disable css-modules/no-undef-class */

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class Row extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    nogutters: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    nogutters: false,
  };

  render() {
    const { className, children, nogutters, ...other } = this.props;

    const classname = cn("row", nogutters && "no-gutters", className);

    return (
      <div className={classname} {...other}>
        {children}
      </div>
    );
  }
}

export default Row;
