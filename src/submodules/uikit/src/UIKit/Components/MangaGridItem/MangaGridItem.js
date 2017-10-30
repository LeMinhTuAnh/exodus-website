import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";
import Thumbnail from "../Thumbnail";

import s from "./MangaGridItem.scss"; // eslint-disable-line css-modules/no-unused-class

class MangaGridItem extends React.PureComponent {
  static propTypes = {
    serieUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    mangaTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    className: null,
  };

  render() {
    const { serieUrl, thumbnailUrl, mangaTitle, className, children, ...otherProps } = this.props;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        <Link to={serieUrl} className={s.thumbnailWrap}>
          <div className={s.thumbnailOverlay} />
          <Thumbnail loadingSize={30} className={s.thumbnail} src={thumbnailUrl} alt={mangaTitle} />
        </Link>
        <Link to={serieUrl} className={s.mangaTitle}>
          {mangaTitle}
        </Link>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(MangaGridItem);
