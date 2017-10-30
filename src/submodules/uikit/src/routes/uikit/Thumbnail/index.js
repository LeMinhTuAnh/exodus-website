import React, { PureComponent } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Thumbnail from "../../../UIKit/Components/Thumbnail";

import s from "./styles.scss";

class ThumbnailComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Thumbnails</h1>
        <br />
        {/* Thumbnail ratio 2/3 */}
        <h2 className={s.title}>Thumbnail ratio 2/3</h2>
        <div className={s.thumbnailWrap}>
          <Thumbnail
            className={s.thumbnailRatio2_3}
            src="https://vgfiles.nabstudio.com/portal/bace83e3bea730addcbf4283001b6c4a_183717.png"
          />
        </div>

        <br />
        <br />
        <br />

        {/* Thumbnail ratio 1/1 */}
        <h2 className={s.title}>Thumbnail ratio 1/1</h2>
        <div className={s.thumbnailWrap}>
          <Thumbnail
            className={s.thumbnailRatio1_1}
            src="https://vgfiles.nabstudio.com/portal/aaedd94de0db5e6067407d69ce560167_358279_thumbnail.jpg"
          />
        </div>

        <br />
        <br />
        <br />

        {/* Thumbnail ratio 3/2 */}

        <h2 className={s.title}>Thumbnail ratio 3/2</h2>
        <div className={s.thumbnailWrap}>
          <Thumbnail
            className={s.thumbnailRatio3_2}
            src="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withStyles(s)(ThumbnailComponent);
