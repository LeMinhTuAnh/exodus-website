import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./Loading.scss";

import loadingUrl from "./loading.svg";

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

class Loading extends React.Component {
  static defaultProps = {
    size: null,
    style: {},
    className: null,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, style, size, ...otherProps } = this.props;

    const loadingStyle = Object.assign({}, style, size && { width: size, height: size });

    return (
      <img
        src={loadingUrl}
        alt="Loading"
        className={cn(s.loading, className)}
        style={loadingStyle}
        {...otherProps}
      />
    );
  }
}

Loading.propTypes = propTypes;

export default withStyles(s)(Loading);
