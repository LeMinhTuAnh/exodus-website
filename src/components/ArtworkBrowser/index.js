/* eslint react/no-string-refs:"off" */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Slider from "react-slick";
// TODO: use Image with loading and error state
import Image from "../elements/Image";
import ArrowButton from "../elements/ArrowButtons";
import style from "./style.less";

class ArtworkBrowser extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    initialSlide: PropTypes.number, // initial active slide
  };

  static defaultProps = {
    items: [],
    initialSlide: 0,
  };

  state = {
    activeIndex: this.props.initialSlide,
  };

  onSlideChange = index => {
    this.setState({ activeIndex: index });
  };

  onClickThumbnail = (event, index) => {
    event.preventDefault();
    this.refs.slider.slickGoTo(index);
  };

  render() {
    const { items, initialSlide } = this.props;
    if (!items) return null;
    const settings = {
      className: style.carousel,
      adaptiveHeight: false,
      autoplay: false,
      lazyLoad: true,
      useCSS: true,
      initialSlide,
      afterChange: this.onSlideChange,
      prevArrow: <ArrowButton />,
      nextArrow: <ArrowButton next />,
    };
    return (
      <div className={style.artworkBrowser}>
        <Slider ref="slider" {...settings}>
          {items.map((imageUrl, index) =>
            (<div key={imageUrl ? `${imageUrl.substr(-20)}big` : `${index}image`}>
              <figure>
                <Image src={imageUrl} />
              </figure>
            </div>),
          )}
        </Slider>
        <div className={style.thumbnails}>
          {items.map((imageUrl, idx) =>
            (<div
              key={imageUrl ? `${imageUrl.substr(-20)}thumb` : `${idx}thumb`}
              className={classnames(style.item, idx === this.state.activeIndex ? style.active : "")}
            >
              <a
                href="#"
                onClick={event => {
                  this.onClickThumbnail(event, idx);
                }}
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                &nbsp;
              </a>
            </div>),
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(ArtworkBrowser);
