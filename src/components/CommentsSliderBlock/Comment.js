import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Avatar from "../Avatar";

import avatarUrl from "./avatar.svg";

import s from "./style.less"; // eslint-disable-line

class Comment extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  };

  render() {
    const { name, comment } = this.props;

    return (
      <div className={s.wrap}>
        <div className={s.media_wrap}>
          <div className={s.avatar_wrap}>
            <Avatar src={avatarUrl} style={{ width: 30, height: 30, border: "none" }} />
          </div>
          <div>
            <h4 className={s.media_heading}>{name}</h4>
            <p className={s.content}>{comment}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Comment);
