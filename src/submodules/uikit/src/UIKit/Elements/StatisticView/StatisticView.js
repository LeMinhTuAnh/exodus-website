import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Icon from "../Icon";

import s from "./StatisticView.scss";

import colorCode from "../../utils/colorCode";

class StatisticView extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    textColor: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    iconColor: null,
    textColor: null,
  };

  render() {
    const { iconName, textContent, iconColor, textColor, className, ...otherProps } = this.props;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        <Icon name={iconName} style={{ color: colorCode(iconColor) }} className={s.icon} />
        <span className={s.text} style={{ color: colorCode(textColor) }}>
          {textContent}
        </span>
      </div>
    );
  }
}

export default withStyles(s)(StatisticView);
