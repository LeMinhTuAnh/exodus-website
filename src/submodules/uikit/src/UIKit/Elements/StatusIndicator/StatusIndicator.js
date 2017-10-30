import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Icon from "../Icon";

import mdlUpgrade from "../../utils/mdlUpgrade";

import s from "./StatusIndicator.scss";

import colorCode from "../../utils/colorCode";

class StatusIndicator extends React.PureComponent {
  static propTypes = {
    circleColor: PropTypes.string,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    circleColor: "",
  };

  render() {
    const { circleColor, text, ...props } = this.props;

    const circleStyle = circleColor ? { color: colorCode(circleColor) } : {};

    return (
      <div className={cn(s.root, "mdl-js-button", "mdl-js-ripple-effect")} {...props}>
        <Icon name="lens" className={s.circle} style={circleStyle} />
        <span className={s.text}>
          {text}
        </span>
      </div>
    );
  }
}

export default withStyles(s)(mdlUpgrade(StatusIndicator));
