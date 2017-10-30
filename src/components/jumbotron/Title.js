import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less"; // eslint-disable-line

class Title extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <h1 className={s.title} {...this.props}>
        {this.props.children}
      </h1>
    );
  }
}

export default withStyles(s)(Title);
