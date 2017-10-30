/**
 * This component uses react-collapse
 */

import React from "react";
import PropTypes from "prop-types";
import { Collapse as ReactCollapse } from "react-collapse/lib/Collapse";

class Collapse extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    expanded: PropTypes.bool,
    initialHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
  };

  static defaultProps = {
    expanded: true,
    initialHeight: null,
    style: {},
  };

  render() {
    const { children, expanded, style, initialHeight, ...otherProps } = this.props;

    let rootStyle = Object.assign({}, style);

    if (initialHeight && !expanded) {
      rootStyle = Object.assign({}, rootStyle, { height: initialHeight });
    }

    delete otherProps.initialHeight;

    return (
      <ReactCollapse isOpened={expanded} style={rootStyle} {...otherProps}>
        {children}
      </ReactCollapse>
    );
  }
}

export default Collapse;
