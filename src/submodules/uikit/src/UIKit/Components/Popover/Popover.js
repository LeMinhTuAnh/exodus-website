import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./Popover.scss";

class Popover extends React.PureComponent {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    target: PropTypes.string.isRequired,
    align: PropTypes.oneOf(["left", "right"]),
    valign: PropTypes.oneOf(["bottom", "top"]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    align: "left",
    valign: "bottom",
    width: null,
    className: null,
    style: {},
  };

  componentDidMount() {
    if (process.env.BROWSER) {
      window.componentHandler.upgradeElements(ReactDOM.findDOMNode(this));
    }
  }

  componentWillUnmount() {
    if (process.env.BROWSER) {
      const elt = ReactDOM.findDOMNode(this);

      window.componentHandler.downgradeElements(elt);

      const parent = elt.parentElement;
      const grandparent = parent && parent.parentElement;

      if (parent && grandparent && parent.classList.contains("mdl-menu__container")) {
        grandparent.replaceChild(elt, parent);
      }
    }
  }

  render() {
    const { children, align, valign, target, className, style, width, ...otherProps } = this.props;

    const rootStyle = Object.assign({}, style, width && { width });

    const rootClassNames = cn(
      "mdl-menu mdl-js-menu",
      `mdl-menu--${valign}-${align}`,
      "mdl-js-ripple-effect",
      s.root,
      className,
    );

    return (
      <div data-mdl-for={target} className={rootClassNames} {...otherProps} style={rootStyle}>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Popover);
