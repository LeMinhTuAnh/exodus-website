/* eslint
  max-len: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import { connect } from "react-redux";
import * as REDUCERS from "../../constants/reducers";

// import Loading from "../elements/Loading";

import { closeGetAppBar } from "../../actions/runtime";

import style from "./style.less";

import fetch from "../../core/fetch";
import { AJAX_GET_DEEPLINK, AJAX_REDIRECT_DEEPLINK } from "../../constants/ajax";

const mapStateToProps = state => {
  const isShow = state[REDUCERS.REDUCER_RUNTIME].openGetAppBar;
  const deepLinkType = state[REDUCERS.REDUCER_RUNTIME].deepLinkType;
  const oid = state[REDUCERS.REDUCER_RUNTIME].oid;
  return {
    isShow,
    deepLinkType,
    oid,
  };
};

const mapDispatchToProps = dispatch => ({
  closeGetAppBar: () => dispatch(closeGetAppBar()),
});

class GetApp extends React.Component {
  static propTypes = {
    isShow: PropTypes.bool,
    closeGetAppBar: PropTypes.func.isRequired,
    deepLinkType: PropTypes.string.isRequired,
    oid: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    isShow: true,
    isRequestLink: false,
    className: null,
  };

  constructor(props) {
    super(props);

    const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent || navigator.vendor || window.opera,
    );

    this.state = {
      isMobileDevice,
      deeplink: "#",
    };
  }

  onGetLink = (linkType, oid = "") => {
    if (!linkType || !process.env.BROWSER) {
      this.setState({ deeplink: "" });
      return;
    }
    let requestURl = AJAX_GET_DEEPLINK.replace("{{linkType}}", linkType);
    if (oid) {
      requestURl += `?oid=${oid}`;
    }
    this.setState({ isRequestLink: true });
    fetch(requestURl, {
      method: "get",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then((result = {}) => {
        this.setState({ isRequestLink: false });
        const { data = "" } = result;
        this.setState({ deeplink: data });

        window.location.href = data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  onClickClose = event => {
    event.preventDefault();
    this.props.closeGetAppBar();
  };

  getRedirectLink = () => {
    const { deepLinkType, oid = "" } = this.props;
    let requestURL = AJAX_REDIRECT_DEEPLINK.replace("{{linkType}}", deepLinkType);
    if (oid) {
      requestURL += `?oid=${oid}`;
    }
    return requestURL;
  };

  clickViewInApp = event => {
    event.preventDefault();

    const { deepLinkType, oid = "" } = this.props;
    this.onGetLink(deepLinkType, oid);
  };

  render = () => {
    const { isShow, deepLinkType, className, ...other } = this.props;
    const { isMobileDevice, deeplink = "" } = this.state;
    // const { isMobileDevice, deeplink = "", isRequestLink } = this.state;
    if (!isMobileDevice) return null;
    if (!isShow) return null;
    if (!deeplink) return null;
    if (!deepLinkType) return null;

    return (
      <div className={cn(style.getApp, className)} {...other}>
        <a href="#" className={style.closeIcon} onClick={this.onClickClose}>
          <i className="material-icons">close</i>
        </a>
        <div className={style.desc}>Read on Manga Rock app</div>
        <a href={this.getRedirectLink()} className={style.button}>
          VIEW IN APP
        </a>
      </div>
    );
  };
}

// export default withStyles(style)(GetApp);
export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true,
  areStatesEqual: (prev, next) =>
    prev[REDUCERS.REDUCER_RUNTIME].deepLinkType === next[REDUCERS.REDUCER_RUNTIME].deepLinkType &&
    prev[REDUCERS.REDUCER_RUNTIME].openGetAppBar === next[REDUCERS.REDUCER_RUNTIME].openGetAppBar,
})(withStyles(style)(GetApp));
