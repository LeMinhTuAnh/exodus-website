import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import style from "./ShareButton.scss";

import SvgFacebook from "../../svg/facebook.svg";
import SvgTwitter from "../../svg/twitter.svg";

class ShareButton extends React.PureComponent {
  static propTypes = {
    shareLink: PropTypes.string.isRequired,
    shareCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    twitter: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    twitter: false,
    className: null,
    shareCount: 0,
  };

  render() {
    const { shareLink, shareCount, twitter, className, ...otherProps } = this.props;

    const facebookElement = (
      <span>
        <img src={SvgFacebook} alt="Facebook" />
        <span className={style.caption}>share</span>
      </span>
    );

    const twitterElement = (
      <span>
        <img src={SvgTwitter} alt="Twitter" />
        <span className={style.caption}>Tweet</span>
      </span>
    );

    const element = twitter ? twitterElement : facebookElement;

    return (
      <div className={cn(style.root, className)} {...otherProps}>
        <a
          className={style.shareButton}
          style={{ backgroundColor: `${twitter ? "#00aced" : "#3b5997"}` }}
          href={`${shareLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {element}
        </a>
        {shareCount > 0 &&
          <div className={style.shareCount}>
            {shareCount}
          </div>}
      </div>
    );
  }
}

export default withStyles(style)(ShareButton);
