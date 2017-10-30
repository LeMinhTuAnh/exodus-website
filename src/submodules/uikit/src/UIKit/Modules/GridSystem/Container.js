/* eslint-disable css-modules/no-undef-class */

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class Container extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    fluid: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    fluid: false,
  };

  render() {
    const { className, children, fluid, ...other } = this.props;

    const classname = cn(fluid ? "container-fluid" : "container", className);

    return (
      <div className={classname} {...other}>
        {children}
      </div>
    );
  }
}

export default Container;
