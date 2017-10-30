import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less"; // eslint-disable-line

class ImageComponent extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  render() {
    const { src, ...other } = this.props;

    return (
      <div className={s.image}>
        <img src={src} {...other} alt="Manga Rock Definitive" />
      </div>
    );
  }
}

export default withStyles(s)(ImageComponent);
