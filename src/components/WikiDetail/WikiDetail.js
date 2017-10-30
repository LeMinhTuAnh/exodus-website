import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// submodules
import BlockTitle from "../../submodules/uikit/src/UIKit/Components/Title/BlockTitle";
import PageTitle from "../../submodules/uikit/src/UIKit/Components/Title/PageTitle";
import Avatar from "../../submodules/uikit/src/UIKit/Components/Avatar";

// import PageTitle from "../elements/PageTitle";
// import BlockTitle from "../elements/BlockTitle";
// import ImageThumbnail from "../elements/ImageThumbnail";
import ArtworkGrid from "../ArtworkGrid";

import strToHtml, { jsonToHtml } from "../../tools";

import { ShareFacebook, ShareTwitter } from "../../components/ShareButton";

import s from "./WikiDetail.scss";

// import style from "./style.less";

class WikiDetail extends React.Component {
  static propTypes = {
    entity: PropTypes.object.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    artworkPrefixBrowserUrl: PropTypes.string,
    extra: PropTypes.object,
    artworks: PropTypes.array,
    linkShare: PropTypes.string,
  };

  static defaultProps = {
    name: "",
    description: "",
    thumbnail: "",
    artworkPrefixBrowserUrl: "",
    extra: {},
    artworks: [],
    linkShare: "",
  };

  render() {
    if (!this.props.entity) return null;

    const {
      name,
      description,
      thumbnail,
      artworks,
      artworkPrefixBrowserUrl,
      extra,
      linkShare,
      entity,
      ...otherProps
    } = this.props;
    const artworkBrowserUrl = `${artworkPrefixBrowserUrl}`;

    return (
      <div {...otherProps}>
        <div>
          <div className={s.avatarWrap}>
            <Avatar className={s.avatar} src={thumbnail} alt={name} />
            <PageTitle className={s.hiddenDesktop}>{name}</PageTitle>
          </div>
          <div className={s.info}>
            <PageTitle className={s.hiddenPhone}>{name}</PageTitle>
            <meta itemProp="name" content={name} />
            <meta itemProp="image" content={thumbnail} />
            <div className={s.shareButtons}>
              <ShareFacebook linkShare={linkShare} />
              <ShareTwitter linkShare={linkShare} />
            </div>

            {extra && Object.keys(extra).length > 0 && <div>{jsonToHtml(extra)}</div>}
            {description && (
              <div className={s.description} itemProp="description">
                {strToHtml(description)}
              </div>
            )}
          </div>
        </div>
        {artworks &&
        artworks.length > 0 && (
          <div>
            <BlockTitle actionLink={artworkBrowserUrl} actionName="View All">
              Pictures
            </BlockTitle>
            <ArtworkGrid images={artworks} browserUrl={artworkPrefixBrowserUrl} />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(s)(WikiDetail);
