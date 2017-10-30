import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";
import StatisticView from "../../Elements/StatisticView";
import Thumbnail from "../Thumbnail";

import s from "./CollectionListItem.scss";

class CollectionListItem extends React.PureComponent {
  static propTypes = {
    bannerUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    collectionUrl: PropTypes.string.isRequired,
    totalManga: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const {
      bannerUrl,
      title,
      collectionUrl,
      totalManga,
      dateCreated,
      className,
      ...otherProps
    } = this.props;

    return (
      <Link className={cn(s.root, className)} to={collectionUrl} {...otherProps}>
        <div className={s.thumbnailWrap}>
          <Thumbnail className={s.thumbnail} src={bannerUrl} />
        </div>
        <div className={s.info}>
          <h4 className={s.title}>
            {title}
          </h4>
          {
            <div className={s.staticWrap}>
              {totalManga && <StatisticView iconName="class" textContent={`${totalManga} manga`} />}
              {totalManga && <span>&nbsp;|&nbsp;</span>}
              {dateCreated && <StatisticView iconName="date_range" textContent={dateCreated} />}
            </div>
          }
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(CollectionListItem);
