import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import FABButton from "react-mdl/lib/FABButton";
import Icon from "react-mdl/lib/Icon";

import style from "./style.less";

const ArrowButton = ({ next, className, ...props }) => (
  <FABButton
    ripple
    {...props}
    className={classnames(style.arrowButton, className, next ? style.next : "")}
  >
    {next && <Icon name="keyboard_arrow_right" />}
    {!next && <Icon name="keyboard_arrow_left" />}
  </FABButton>
);

ArrowButton.propTypes = {
  next: PropTypes.bool,
  className: PropTypes.string,
};

ArrowButton.defaultProps = {
  next: false,
  className: "",
};

export default withStyles(style)(ArrowButton);
