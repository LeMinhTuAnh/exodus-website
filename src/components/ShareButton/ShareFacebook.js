/* eslint max-len:"off" */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import fetch from "../../core/fetch";

import style from "./style.less";

import { AJAX_FACEBOOK_SHARE_COUNT } from "../../constants/ajax";

const cacheCount = {};

class ShareFacebook extends React.PureComponent {

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
    return fetch(AJAX_FACEBOOK_SHARE_COUNT.replace("{{url}}", url), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(json => {
      // console.log("retrieveCount json=", json);
      cacheCount[url] = json.share.share_count;
      if (this.props.linkShare === url) {
        this.setState({ count: json.share.share_count });
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
          style={{ backgroundColor: "#3b5997" }}
          href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.linkShare}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/svg/share_facebook_icon.svg" alt="Facebook" />
          <span className={style.text} style={{ position: "relative", top: 1 }}>
            share
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

export default withStyles(style)(ShareFacebook);
