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
import history from "../../../core/history";

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    externalLink: PropTypes.bool,
  };

  static defaultProps = {
    onClick: null,
    children: null,
    externalLink: false,
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (typeof this.props.to === "function") {
      this.props.to(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    if (!this.props.externalLink) {
      event.preventDefault();
      history.push(this.props.to);
    }
  };

  render() {
    const { to, children, ...linkProps } = this.props;
    // const  = Object.assign({}, this.props);
    delete linkProps.externalLink;
    return <a href={typeof to === "string" ? to : "#"} {...linkProps} onClick={this.handleClick}>{children}</a>;
  }
}

export default Link;
