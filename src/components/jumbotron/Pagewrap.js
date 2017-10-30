import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less"; // eslint-disable-line

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div {...this.props} className={s.root}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(Section);
