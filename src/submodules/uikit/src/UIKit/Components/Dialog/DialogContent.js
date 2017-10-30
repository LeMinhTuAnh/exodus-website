import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./DialogContent.scss";

class DialogContent extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className, ...otherProps } = this.props;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(DialogContent);
