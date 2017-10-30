import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./style.less"; // eslint-disable-line

class Caption extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: "",
  }

  render() {
    const { className, ...otherProps } = this.props;

    return (
      <div className={cn(s.caption, className)} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(Caption);
