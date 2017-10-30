/* eslint-disable camelcase */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// submodules
import Loading from "../../submodules/uikit/src/UIKit/Elements/Loading";
import List from "../../submodules/uikit/src/UIKit/Components/List";
import { MangaListItem, Subtext } from "../../submodules/uikit/src/UIKit/Components/MangaListItem";

import Authors from "./Authors";

import s from "./MangaList.scss";

import { getObjectUri } from "../../helper/utils";

class MangaList extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    showOrder: PropTypes.bool,
    isLoading: PropTypes.bool,
    meta: PropTypes.object,
  };

  static defaultProps = {
    items: [],
    showOrder: false,
    meta: {},
    isLoading: false,
  };

  render() {
    const { items, showOrder, isLoading } = this.props;
    const meta = this.props.meta;

    if (isLoading) {
      return <Loading />;
    }

    if (!items) return null;

    return (
      <List itemScope itemType="http://schema.org/ItemList">
        {items.map((serieId, idx) => {
          const series = meta[serieId];

          if (!series) {
            return null;
          }

          const authors = {};

          if (series.author_ids && series.author_ids.length > 0) {
            series.author_ids.forEach(authorId => {
              if (meta[authorId]) {
                authors[authorId] = meta[authorId];
              }
            }, this);
          }

          const {
            oid,
            name: mangaTitle,
            thumbnail: thumbnailUrl,
            completed,
            total_chapters,
          } = series;

          const serieUrl = getObjectUri({ oid });

          return (
            <MangaListItem
              key={series.oid}
              mangaTitle={mangaTitle}
              thumbnailUrl={thumbnailUrl}
              serieUrl={serieUrl}
              numbering={showOrder ? `${idx + 1}` : null}
              itemScope
              itemType="http://schema.org/ItemList"
              className={s.mangaListItem}
            >
              <Authors authors={Object.values(authors)} />
              <Subtext>
                {`${completed ? "Completed" : "Ongoing"}, ${total_chapters} chapters`}
              </Subtext>
              <meta itemProp="name" content={name} />
              <meta itemProp="image" content={thumbnailUrl} />
              <meta itemProp="url" content={serieUrl} />
            </MangaListItem>
          );
        })}
      </List>
    );
  }
}

export default withStyles(s)(MangaList);
