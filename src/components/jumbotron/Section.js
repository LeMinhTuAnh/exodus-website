import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";

class Section extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    gray: PropTypes.bool,
  };

  static defaultProps = {
    gray: false,
  };

  render() {
    const _props = Object.assign({}, this.props);

    if (this.props.gray) {
      _props.style = Object.assign({}, _props.style, { backgroundColor: "#fafafa" });
    }

    delete _props.gray;

    return (
      <div className={s.section} {..._props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles()(Section);
