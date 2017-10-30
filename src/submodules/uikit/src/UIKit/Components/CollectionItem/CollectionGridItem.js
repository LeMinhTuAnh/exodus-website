import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Block from "../../Elements/Block";
import Link from "../../Elements/Link";
import StatisticView from "../../Elements/StatisticView";
import Thumbnail from "../Thumbnail";

import s from "./CollectionGridItem.scss";

class CollectionGridItem extends React.PureComponent {
  static propTypes = {
    bannerUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    collectionUrl: PropTypes.string.isRequired,
    totalManga: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    noBackground: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    noBackground: false,
    className: null,
  };

  render() {
    const {
      bannerUrl,
      title,
      subtitle,
      collectionUrl,
      totalManga,
      dateCreated,
      noBackground,
      className,
      ...otherProps
    } = this.props;

    return (
      <Link className={cn(s.root, className)} to={collectionUrl} {...otherProps}>
        <Block noBackground={noBackground} noPadding={noBackground}>
          <Thumbnail className={s.banner} src={bannerUrl} />
          <h2 className={s.title}>
            {title}
          </h2>
          <div className={s.subtitle}>
            {subtitle}
          </div>
          <div>
            <StatisticView
              className={s.statisticView}
              iconName="class"
              textContent={`${totalManga} manga`}
            />
            <StatisticView
              className={s.statisticView}
              iconName="date_range"
              textContent={dateCreated}
            />
          </div>
        </Block>
      </Link>
    );
  }
}

export default withStyles(s)(CollectionGridItem);
