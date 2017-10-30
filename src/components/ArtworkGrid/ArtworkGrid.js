import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

// submodules
import Grid from "../../submodules/uikit/src/UIKit/Components/Grid";
import Thumbnail from "../../submodules/uikit/src/UIKit/Components/Thumbnail";
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";

import s from "./ArtworkGrid.scss";

// import ImageThumbnail from "../elements/ImageThumbnail";

// import style from "./style.less";

class ArtworkGrid extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    browserUrl: PropTypes.string,
  };

  static defaultProps = {
    className: "",
    images: [],
    browserUrl: "",
  };

  render() {
    const MAX_SHOWN = 5;
    const { className, images, browserUrl } = this.props;
    if (!images) return null;
    return (
      <Grid className={cn(s.artworkGrid, className)}>
        {images.slice(0, MAX_SHOWN).map((image, idx) => (
          <Link
            className={s.item}
            key={image ? image.substr(-20) : idx}
            to={`${browserUrl}?slide=${idx}`}
          >
            <Thumbnail className={s.thumbnail} src={image} />
          </Link>
        ))}
      </Grid>
    );
  }
}

export default withStyles(s)(ArtworkGrid);
