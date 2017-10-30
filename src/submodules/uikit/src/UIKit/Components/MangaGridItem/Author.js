import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";

import s from "./MangaGridItem.scss"; // eslint-disable-line css-modules/no-unused-class

class MangaGridItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, url, className, ...otherProps } = this.props;

    return (
      <Link to={url} className={cn(s.author, className)} {...otherProps}>
        {children}
      </Link>
    );
  }
}

export default withStyles(s)(MangaGridItem);
