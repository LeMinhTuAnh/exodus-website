/* eslint
    prefer-const: "off",
    css-modules/no-unused-class: "off",
    jsx-a11y/img-has-alt: "off",
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// import s from "./style.less";

import { multiClass, checkImageCachingURL } from "../../helper/utils";

const IMAGE_TYPE = {
  THUMBNAIL: "thumbnail",
  ROUNDED: "rounded",
  CIRCLE: "circle",
};

class Image extends Component {
  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf([IMAGE_TYPE.CIRCLE, IMAGE_TYPE.ROUNDED, IMAGE_TYPE.THUMBNAIL]),
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    src: "",
    className: "",
    type: "",
    isLoading: false,
  };

  render = () => {
    let {
      type,
      // isLoading,
      className,
      src,
      ...other
    } = this.props;

    className = multiClass(className, `img-${type}`);
    other.className = className;
    src = checkImageCachingURL(src);
    delete other.isLoading; // Remove isloading prop pass to img element
    return <img className={className} src={src} {...other} />; // eslint-disable-line
  };
}

export default withStyles()(Image);
