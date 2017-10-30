/* eslint
  import/no-unresolved: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Lazyload from "react-lazyload";

import Link from "../Link";
import Loading from "../Loading";

import style from "./style.less"; // eslint-disable-line
import { checkImageCachingURL, getObjectUri } from "../../../helper/utils";

// base64 encoded icon
// eslint-disable-next-line max-len
// let iconError = "/svg/icon_error.svg";

// image loading status
const IMAGE_STATUS_LOADING = 0;
const IMAGE_STATUS_LOADED = 1;
const IMAGE_STATUS_ERROR = -1;

const errorAvatar = "/svg/error_avatar.svg";

class ImageThumbnail extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    link: PropTypes.string,
    linkOtakumoID: PropTypes.string,
    person: PropTypes.bool,
  };

  static defaultProps = {
    className: "",
    alt: "",
    src: "",
    link: "",
    linkOtakumoID: null,
    person: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      status:
        !props.src || props.src === "" || props.src.length < 10
          ? IMAGE_STATUS_ERROR
          : IMAGE_STATUS_LOADING,
    };

    this.iconError = "/svg/icon_error.svg";
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    // console.log("shouldComponentUpdate ", this.props.src, nextProps.src);
    this.props.src !== nextProps.src ||
    nextState.status !== this.state.status ||
    this.props.person !== nextProps.person;

  onError = () => {
    if (this.state.status === IMAGE_STATUS_LOADING) {
      this.setState({
        status: IMAGE_STATUS_ERROR,
      });
    }
  };

  onLoaded = () => {
    if (this.state.status === IMAGE_STATUS_LOADING) {
      this.setState({
        status: IMAGE_STATUS_LOADED,
      });
    }
  };

  render = () => {
    const { className, alt, person, linkOtakumoID } = this.props;
    let { link } = this.props;
    if (linkOtakumoID) {
      link = getObjectUri({ oid: linkOtakumoID });
    }

    let errorAvatarStyle = {};

    if (person) {
      this.iconError = errorAvatar;
      errorAvatarStyle = {
        width: "100%",
        height: "100%",
      };
    }

    const src = checkImageCachingURL(this.props.src);
    let image = null;
    if (!process.env.BROWSER) {
      image = <img src={src} alt={alt} />;
    } else {
      image = (
        <Lazyload height={120} once resize>
          <img
            src={this.state.status === IMAGE_STATUS_ERROR ? this.iconError : src}
            className={this.state.status === IMAGE_STATUS_ERROR && style.error}
            onLoad={this.onLoaded}
            onError={this.onError}
            alt={alt}
            style={errorAvatarStyle}
          />
        </Lazyload>
      );
    }
    const spinner =
      this.state.status === IMAGE_STATUS_LOADING && process.env.BROWSER ? (
        <Loading className={style.spinner} />
      ) : null;

    let inner = null;

    if (link) {
      inner = (
        <Link className={style.inner} to={link}>
          {spinner}
          {image}
        </Link>
      );
    } else {
      inner = (
        <span className={style.inner}>
          {spinner}
          {image}
        </span>
      );
    }
    return (
      <div itemProp="image" className={classnames(style.imageThumbnail, className)}>
        {inner}
      </div>
    );
  };
}

export default withStyles(style)(ImageThumbnail);
