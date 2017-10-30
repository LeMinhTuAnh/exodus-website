/**
 * NOTE
 * Alway put a wrapper around thumbnail compnent to set the ratio
 * Ratio size using padding-bottom by add className to thubmnail
 * More detail in demo
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Lazyload from "react-lazyload";

import Loading from "../../Elements/Loading";

import s from "./Thumbnail.scss";

import IconErrorSrc from "../../svg/thumbnai_error.svg";

// image loading status
const IMAGE_STATUS_LOADING = 0;
const IMAGE_STATUS_LOADED = 1;
const IMAGE_STATUS_ERROR = -1;

class Thumbnail extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    borderColor: PropTypes.oneOf(["transparent", "black12", null]),
    style: PropTypes.object,
    className: PropTypes.string,
    loadingClass: PropTypes.string,
    loadingSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    borderColor: null,
    style: {},
    className: null,
    loadingClass: null,
    loadingSize: null,
    alt: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      status: !props.src || props.src === "" ? IMAGE_STATUS_ERROR : IMAGE_STATUS_LOADING,
    };
  }

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

  render() {
    const {
      src,
      alt,
      style,
      borderColor,
      className,
      loadingClass,
      loadingSize,
      ...otherProps
    } = this.props;
    const { status } = this.state;

    const spinner =
      this.state.status === IMAGE_STATUS_LOADING
        ? (<div className={s.loadingWrap}>
          <Loading size={loadingSize} className={loadingClass} />
        </div>)
        : null;

    const rootStyle = Object.assign({}, style, borderColor === "transparent" && { borderColor });

    return (
      <div className={cn(s.root, className)} style={rootStyle} {...otherProps}>
        <Lazyload once resize height={100}>
          <img
            src={status === IMAGE_STATUS_ERROR ? IconErrorSrc : src}
            alt={alt}
            onLoad={this.onLoaded}
            onError={this.onError}
            className={cn(
              s.img,
              status === IMAGE_STATUS_LOADED && s.loaded,
              status === IMAGE_STATUS_ERROR && s.error,
            )}
          />
        </Lazyload>
        {spinner}
      </div>
    );
  }
}

export default withStyles(s)(Thumbnail);
