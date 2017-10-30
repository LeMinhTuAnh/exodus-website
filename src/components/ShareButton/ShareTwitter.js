/* eslint max-len:"off" */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import style from "./style.less";
import { AJAX_TWITTER_SHARE_COUNT_LOCAL } from "../../constants/ajax";

const cacheCount = {};

class ShareTwitter extends React.PureComponent {

  static propTypes = {
    linkShare: PropTypes.string,
  }

  static defaultProps = {
    linkShare: "#",
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    if (cacheCount[this.props.linkShare]) {
      this.setState({ count: cacheCount[this.props.linkShare] });
    } else {
      this.retrieveCount(this.props.linkShare);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.linkShare !== this.props.linkShare) {
      if (cacheCount[nextProps.linkShare]) {
        this.setState({ count: cacheCount[nextProps.linkShare] });
      } else {
        this.retrieveCount(nextProps.linkShare);
      }
    }
  }

  retrieveCount = (url) => {
    if (!process.env.BROWSER || cacheCount[url]) {
      return null;
    }
    return fetch(AJAX_TWITTER_SHARE_COUNT_LOCAL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
    .then(res => res.json())
    .then(json => {
      // console.log("retrieveCount json=", json);
      cacheCount[url] = json.data;
      if (this.props.linkShare === url) {
        this.setState({ count: json.data });
      }
      return json;
    });
  }

  render() {
    const count = (this.state && this.state.count) || 0;
    return (
      <div className={style.root}>
        <a
          className={style.shareButton}
          style={{ backgroundColor: "#00aced" }}
          href={`https://twitter.com/intent/tweet?url=${this.props.linkShare}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/svg/share_twitter_icon.svg" alt="Twitter" />
          <span className={style.text}>
            tweet
          </span>
        </a>
        {count > 0 &&
          <div className={style.share}>
            {count}
          </div>
        }
      </div>
    );
  }
}

export default withStyles(style)(ShareTwitter);
