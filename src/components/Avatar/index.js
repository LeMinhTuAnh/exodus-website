/* eslint
  prefer-const : "off",
  css-modules/no-unused-class : "off"
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";
import Image from "../Image";

import { multiClass } from "../../helper/utils";

// const DEFAULT_AVATAR_URL = "//files.nabstudio.com/images/anonymouse.png";

const DEFAULT_AVATAR_URL = "/svg/avatar.svg";

class Avatar extends Component {
  static propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,

  };
  static defaultProps = {
    src: DEFAULT_AVATAR_URL,
    className: "",
  }

  render() {
    let { src = "", className, ...other } = this.props;
    className = multiClass(className, s["avatar-image"]);
    return (
      <Image
        className={className}
        type={"circle"}
        src={src}
        {...other}
      />
    );
  }
}

export default withStyles(s)(Avatar);
