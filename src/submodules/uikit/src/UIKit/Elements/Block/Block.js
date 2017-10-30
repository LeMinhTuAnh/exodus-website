import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import style from "./Block.scss";

class Block extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    noBackground: PropTypes.bool,
    noPadding: PropTypes.bool,
  };

  static defaultProps = {
    noBackground: false,
    noPadding: false,
    className: null,
  };

  render() {
    const { className, children, noBackground, noPadding, ...other } = this.props;

    const classnames = cn(
      style.root,
      className,
      noBackground && style["no-background"],
      noPadding && style["no-padding"],
    );

    return (
      <div className={classnames} {...other}>
        {children}
      </div>
    );
  }
}

export default withStyles(style)(Block);
