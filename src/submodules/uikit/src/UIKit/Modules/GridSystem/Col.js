/* eslint-disable css-modules/no-undef-class */

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

class Col extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    col: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    col: false,
  };

  render() {
    const { className, children, xs, sm, md, lg, xl, col, ...other } = this.props;

    const classname = cn(
      xs && `col-${xs}`,
      sm && `col-sm-${sm}`,
      md && `col-md-${md}`,
      lg && `col-lg-${lg}`,
      xl && `col-xl-${xl}`,
      col && "col",
      className,
    );

    return (
      <div className={classname} {...other}>
        {children}
      </div>
    );
  }
}

export default Col;
