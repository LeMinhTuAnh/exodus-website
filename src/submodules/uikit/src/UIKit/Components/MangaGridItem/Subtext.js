import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./MangaGridItem.scss"; // eslint-disable-line css-modules/no-unused-class

class Subtext extends React.PureComponent {
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
      <div className={cn(s.subtext, className)} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Subtext);
