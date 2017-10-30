/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
// import history from "../../core/history";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import style from "./Link.scss";

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    external: PropTypes.bool,
  };

  static defaultProps = {
    onClick: null,
    className: null,
    external: false,
  };

  static contextTypes = {
    history: PropTypes.object,
  };

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    if (this.context && this.context.history && !this.props.external) {
      event.preventDefault();
      this.context.history.push(this.props.to);
    }
  };

  render() {
    const { to, children, className, external, ...props } = this.props;

    const classname = cn(style.root, className);

    return (
      <a
        href={to}
        {...props}
        target={external ? "_blank" : ""}
        className={classname}
        onClick={this.handleClick}
      >
        {children}
      </a>
    );
  }
}

export default withStyles(style)(Link);
