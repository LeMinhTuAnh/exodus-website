import React from "react";
import PropTypes from "prop-types";

class Tab extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <div {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Tab;
