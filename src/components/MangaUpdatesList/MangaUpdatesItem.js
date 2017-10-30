import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./MangaUpdatesItem.scss";

// submodule
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";
import NewIndicator from "../../submodules/uikit/src/UIKit/Elements/NewIndicator";
import Thumbnail from "../../submodules/uikit/src/UIKit/Components/Thumbnail";

import RelativeTime from "../../helper/relativeTime";
import { getObjectUri } from "../../helper/utils";

import * as constants from "../../constants";

class MangaUpdatesItem extends React.Component {
  static propTypes = {
    serie: PropTypes.object.isRequired,
  };

  // render datetime ago string
  shouldComponentUpdate = nextProps => nextProps.serie.oid !== this.props.serie.oid;

  render() {
    const maximumChapterItems = constants.MAX_CHAPTERS_PER_MANGA_INFO_ROW;
    const { serie } = this.props;
    const { name, thumbnail, oid } = serie;
    const updatedAt = serie.updated_at;
    const newChapters = serie.new_chapters;
    const totalNewChapters = serie.updated_chapters;

    const newChaptersList = newChapters.map((chapter, i) => {
      if (i >= maximumChapterItems) {
        return null;
      }
      return (
        <div className={s.chapter} key={chapter.oid}>
          <NewIndicator className={s.newIndicator} />
          <Link className={s.newChapter} to={getObjectUri({ oid: chapter.oid, series_oid: oid })}>
            {chapter.name}
          </Link>
        </div>
      );
    });

    let viewAllChapters = null;

    if (newChapters.length > maximumChapterItems) {
      viewAllChapters = (
        <Link className={s.showMoreText} to={`${getObjectUri({ oid })}#chapters-list`}>
          {`and ${totalNewChapters - 3} more...`}
        </Link>
      );
    }

    return (
      <div
        className={s.root}
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/Article"
      >
        {/* Column 1 */}
        <div className={cn("col-md-5 col-12", s.columnOne)}>
          <div>
            <meta itemProp="name" content={name} />
            <meta itemProp="image" content={thumbnail} />
            <meta itemProp="url" content={getObjectUri({ oid })} />

            <div className={s.mangaItem}>
              <Link to={getObjectUri({ oid })}>
                <Thumbnail loadingSize={16} className={s.thumbnail} src={thumbnail} />
              </Link>
              <div className={s.info}>
                <Link className={s.mangaTitle} to={getObjectUri({ oid })}>
                  {name}
                </Link>
                <div className={s.subtext}>
                  {`${totalNewChapters} new chapter${totalNewChapters > 1 ? "s" : ""}`}
                </div>
              </div>
            </div>

            <div className={cn(s.showPhone)}>
              {newChaptersList}
              {viewAllChapters}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className={cn("col-sm-5", s.hiddenPhone)}>
          {newChaptersList}
          {viewAllChapters}
        </div>

        {/* Column 3 */}
        <div className={cn("col-sm-2", s.hiddenPhone, s.updated)}>
          {RelativeTime.formatTimeAgo(updatedAt)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MangaUpdatesItem);
