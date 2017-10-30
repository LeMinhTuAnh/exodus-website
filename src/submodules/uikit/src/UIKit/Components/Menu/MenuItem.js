import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Icon from "../../Elements/Icon";

import s from "./MenuItem.scss";

class MenuItem extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    iconOnRight: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    secondaryText: null,
    icon: null,
    iconColor: null,
    iconOnRight: false,
    className: null,
  };

  render() {
    const {
      label,
      secondaryText,
      icon,
      iconColor,
      iconOnRight,
      className,
      ...otherProps
    } = this.props;

    const rootClassNames = cn("mdl-menu__item", s.root, className);

    return (
      <li className={rootClassNames} {...otherProps}>
        {icon && !iconOnRight && <Icon color={iconColor} name={icon} className={s.iconLeft} />}
        <div className={s.label}>
          {label}
        </div>
        {secondaryText &&
          <div className={s.secondaryText}>
            {secondaryText}
          </div>}
        {icon && iconOnRight && <Icon color={iconColor} name={icon} />}
      </li>
    );
  }
}

export default withStyles(s)(MenuItem);
