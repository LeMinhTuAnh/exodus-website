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

class Icon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    iconName: PropTypes.string,
  }
  static defaultProps = {
    className: "",
    iconName: "circle",
  }

  render() {
    const iconLink = `/svg/${this.props.iconName}.svg`;

    return (<img className={this.props.className} src={iconLink} alt="" />);
  }
}

export default Icon;
