/* eslint
  css-modules/no-unused-class: "off"
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// submodules
import { MangaGridItem, Subtext } from "../../submodules/uikit/src/UIKit/Components/MangaGridItem";

import Authors from "./Authors";

import s from "./MangaGrid.scss";

import { getObjectUri } from "../../helper/utils";

class GridItem extends Component {
  static propTypes = {
    series: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    refFunc: PropTypes.func,
  };
  static defaultProps = {
    refFunc: null,
  };
  shouldComponentUpdate = nextProps => {
    if (this.props.series.oid !== nextProps.series.oid) {
      return true;
    }
    if (this.props.authors.length !== nextProps.authors.length) {
      return true;
    }
    return false;
  };

  render() {
    const { series, authors, refFunc } = this.props;
    return (
      <MangaGridItem
        serieUrl={getObjectUri({ oid: series.oid })}
        thumbnailUrl={series.thumbnail}
        mangaTitle={series.name}
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/Article"
        key={series.oid}
        className={s.mangaGridItem}
        ref={refFunc}
      >
        <meta itemProp="name" content={series.name} />
        <meta itemProp="image" content={series.thumbnail} />
        <meta itemProp="url" content={getObjectUri({ oid: series.oid })} />
        <Authors className={s.authors} authors={authors} />
        <Subtext>
          {series.completed ? "Completed" : "Ongoing"}
          {`, ${series.total_chapters} chapters`}
        </Subtext>
      </MangaGridItem>
    );
  }
}

export default withStyles(s)(GridItem);
