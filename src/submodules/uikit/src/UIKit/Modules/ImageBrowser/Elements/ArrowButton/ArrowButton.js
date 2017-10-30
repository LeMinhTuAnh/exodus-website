import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./ArrowButton.scss";

import IconButton from "../../../../Elements/IconButton";

class ArrowButton extends React.PureComponent {
  static propTypes = {
    next: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    next: false,
    className: null,
  }

  render() {
    const { next, className, ...otherProps } = this.props;

    return (
      <IconButton
        {...otherProps}
        icon={next ? "chevron_right" : "chevron_left"}
        iconColor="white"
        // iconSize={36}
        className={cn(s.button, next ? s.next : s.prev, className)}
      />
    );
  }
}

export default withStyles(s)(ArrowButton);
