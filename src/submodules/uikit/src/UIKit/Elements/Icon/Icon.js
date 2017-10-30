import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Icon extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: "",
    color: null,
    style: {},
  };

  render() {
    const { className, name, color, style, ...otherProps } = this.props;
    const classes = classNames("material-icons", className);

    const rootStyle = Object.assign({}, style, color && { color });

    return (
      <i className={classes} style={rootStyle} {...otherProps}>
        {name}
      </i>
    );
  }
}

export default Icon;
