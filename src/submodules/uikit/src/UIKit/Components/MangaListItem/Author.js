import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";

import s from "./MangaListItem.scss"; // eslint-disable-line css-modules/no-unused-class

class Author extends React.PureComponent {
  static propTypes = {
    authorUrl: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { authorUrl, children, className, ...otherProps } = this.props;

    return (
      <Link className={cn(s.author, className)} to={authorUrl} {...otherProps}>
        {children}
      </Link>
    );
  }
}

export default withStyles(s)(Author);
