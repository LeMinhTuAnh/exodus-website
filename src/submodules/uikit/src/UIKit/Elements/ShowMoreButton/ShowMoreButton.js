import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import FlatButton from "../FlatButton";

import s from "./ShowMoreButton.scss";

class ShowMoreButton extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    opened: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: "SHOW MORE",
    opened: false,
    className: null,
  };

  render() {
    const { children, opened, className, ...otherProps } = this.props;

    return (
      <div className={s.root}>
        <FlatButton
          icon={opened ? "arrow_drop_up" : "arrow_drop_down"}
          className={cn(s.button, className)}
          textBefore
          {...otherProps}
        >
          {children}
        </FlatButton>
      </div>
    );
  }
}

export default withStyles(s)(ShowMoreButton);
