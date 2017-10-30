/* eslint-disable camelcase */

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// Submodules
import {
  MangaGridItem,
  NewChapter,
} from "../../../../submodules/uikit/src/UIKit/Components/MangaGridItem";
import Grid from "../../../../submodules/uikit/src/UIKit/Components/Grid";

import s from "./HotMangaUpdates.scss";

import { getObjectUri } from "../../../../helper/utils";

class HotMangaUpdates extends Component {
  static propTypes = {
    items: PropTypes.array,
  };
  static defaultProps = {
    items: [],
  };

  shouldComponentUpdate = nextProps => {
    if (this.props.items.length !== nextProps.items.length) {
      return true;
    }
    const currentIDs = this.props.items.map(item => item.oid);
    const nextIDs = nextProps.items.map(item => item.oid);
    return currentIDs.join() !== nextIDs.join();
  };

  render() {
    const { items } = this.props;
    if (!items) return null;

    return (
      <Grid className={s.grid} itemScope itemType="http://schema.org/ItemList">
        {items.map(({ thumbnail, name, new_chapters, oid }) =>
          (<MangaGridItem
            serieUrl={getObjectUri({ oid })}
            thumbnailUrl={thumbnail}
            mangaTitle={name}
            className={s.item}
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/Article"
            key={oid}
          >
            <meta itemProp="name" content={name} />
            <meta itemProp="image" content={thumbnail} />
            <meta itemProp="url" content={getObjectUri({ oid })} />
            {new_chapters &&
              new_chapters.length > 0 &&
              <NewChapter url={getObjectUri({ oid: new_chapters[0].oid, series_oid: oid })}>
                {new_chapters[0].name}
              </NewChapter>}
          </MangaGridItem>),
        )}

        {/* Fix Flexbox space-between */}
        <div className={s.item} />
        <div className={s.item} />
      </Grid>
    );
  }
}

export default withStyles(s)(HotMangaUpdates);
