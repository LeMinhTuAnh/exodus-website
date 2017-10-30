import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../Link";

import s from "./Tag.scss";

import colorCode from "../../utils/colorCode";

class Tag extends React.PureComponent {
  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.string.isRequired,
    sublabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    href: null,
    sublabel: null,
    className: null,
    color: null,
    style: {},
  };

  render() {
    const { href, children, sublabel, className, color, style, ...other } = this.props;

    const classname = cn(s.root, href && s.haveLink, className);

    const textColor = color ? { color: "#fff" } : {};

    const colorStyle = color ? { backgroundColor: colorCode(color) } : {};

    const tagStyle = Object.assign({}, style, colorStyle);

    return (
      <Link to={href} className={classname} style={tagStyle} {...other}>
        <span className={s.label} style={textColor}>
          {children}
        </span>

        {sublabel &&
          <span className={s.sublabel} style={textColor}>
            {sublabel}
          </span>}
      </Link>
    );
  }
}

export default withStyles(s)(Tag);
