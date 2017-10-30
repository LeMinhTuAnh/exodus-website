/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Slider from "react-slick";

import LightBox from "./Elements/LightBox";
import ArrowButton from "./Elements/ArrowButton";

import IconButton from "../../Elements/IconButton";

import s from "./ImageBrowser.scss"; // eslint-disable-line
import ss from "./Slick.oscss";

class ImageBrowser extends Component {
  static propTypes = {
    smallTitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    images: PropTypes.array,
    initialSlide: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    active: PropTypes.bool,
    onHide: PropTypes.func,
  };

  static defaultProps = {
    smallTitle: "",
    images: [],
    initialSlide: 0,
    active: false,
    onHide: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.initialSlide,
    };
  }

  onSlideChange = index => {
    this.setState({
      activeIndex: index,
    });
  };

  onClickThumbnail = (event, index) => {
    event.preventDefault();

    this.slider.slickGoTo(index);
  };

  render() {
    const { smallTitle, title, images, active, onHide } = this.props;
    const { activeIndex } = this.state;

    const settings = {
      dots: false,
      initialSlide: 0,
      prevArrow: <ArrowButton />,
      nextArrow: <ArrowButton next />,
      afterChange: this.onSlideChange,
    };

    return (
      <LightBox active={active}>
        <div className={s.container}>
          {/* HEADER */}
          <div className={s.headerRoot}>
            <div>
              {smallTitle && <div className={s.smallTitle}>{smallTitle}</div>}
              <h1 className={s.title}>{title}</h1>
            </div>
            <div>
              <IconButton icon="more_horiz" iconColor="white" />
              <IconButton onClick={onHide} icon="close" iconColor="white" />
            </div>
          </div>

          {/* MAIN IMAGE */}
          <div className={s.mainImageRoot}>
            <Slider
              ref={slider => (this.slider = slider)} // eslint-disable-line
              {...settings}
            >
              {images.map((imageUrl, index) => (
                <div
                  key={imageUrl ? `${imageUrl.substr(-20)}big` : `${index}image`}
                  className={s.imageWrap}
                >
                  <img src={imageUrl} className={s.image} alt="Artwork" />
                </div>
              ))}
            </Slider>
          </div>

          {/* THUMBNAIL */}
          <div className={s.thumbnailsContainer}>
            <div className={s.thumbnailWrap}>
              {images.map((thumbnailUrl, index) => (
                <a
                  href="#"
                  key={thumbnailUrl ? `${thumbnailUrl.substr(-20)}thumb` : `${index}thumb`}
                  className={cn(s.thumbnail, index === activeIndex && s.active)}
                  onClick={event => {
                    this.onClickThumbnail(event, index);
                  }}
                >
                  <img className={s.thumbnailImg} src={thumbnailUrl} alt="Artwork thumbnail" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </LightBox>
    );
  }
}

export default withStyles(ss, s)(ImageBrowser);
