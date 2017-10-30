import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";
import Thumbnail from "../Thumbnail";

import s from "./MangaListItem.scss"; // eslint-disable-line css-modules/no-unused-class

class MangaListItem extends React.PureComponent {
  static propTypes = {
    mangaTitle: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    serieUrl: PropTypes.string.isRequired,
    numbering: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    className: PropTypes.string,
    loadingSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    className: null,
    numbering: null,
    children: null,
    loadingSize: 16,
  };

  render() {
    const {
      thumbnailUrl,
      mangaTitle,
      serieUrl,
      numbering,
      children,
      className,
      loadingSize,
      ...otherProps
    } = this.props;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        {numbering && <div className={s.numbering}>{numbering}</div>}
        <Link alt={mangaTitle} to={serieUrl} className={s.thumbnailWrap}>
          <Thumbnail
            loadingSize={loadingSize}
            className={s.thumbnail}
            src={thumbnailUrl}
            alt={mangaTitle}
          />
        </Link>
        <div className={s.info}>
          <Link className={s.mangaTitle} to={serieUrl}>
            {mangaTitle}
          </Link>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MangaListItem);
