import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import iOS from "./ios_download.png";
import Android from "./android_download.png";

import Link from "../Link";

class DirectDownloadButtons extends React.Component {
  static propTypes = {
    iosLink: PropTypes.string,
    androidLink: PropTypes.string,
  };

  static defaultProps = {
    iosLink: "https://itunes.apple.com/us/app/manga-rock-best-manga-reader/id519675128?mt=8",
    androidLink: "/definitive",
  };

  render() {
    const textStyle = {
      marginTop: 25,
      marginBottom: 10,
    };

    const buttonStyle = {
      display: "inline-block",
      marginRight: 10,
    };

    return (
      <div>
        <div style={textStyle}>Or you can download the app directly here:</div>
        <Link externalLink style={buttonStyle} to={this.props.iosLink}>
          <img src={iOS} alt="iOS download button" />
        </Link>
        <Link style={buttonStyle} to={this.props.androidLink}>
          <img src={Android} alt="Android download button" />
        </Link>
      </div>
    );
  }
}

export default withStyles()(DirectDownloadButtons);
