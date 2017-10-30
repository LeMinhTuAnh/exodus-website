import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import style from "./style.less";

class Collapse extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    opened: PropTypes.bool,
  }

  static defaultProps = {
    className: "",
    opened: false,
  }

  render = () => {
    // TODO: how to know when collapse is not needed
    const { className, children, opened } = this.props;
    return (
      <div className={classnames(style.collapse, opened ? style.opened : "", className)}>
        {children}
      </div>
    );
  }
}

export default withStyles(style)(Collapse);
