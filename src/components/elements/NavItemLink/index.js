import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import history from "../../../core/history";

class NavItemLink extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    role: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    eventKey: PropTypes.any,
    children: PropTypes.any.isRequired,
    onTouch: PropTypes.func,
  };
  static defaultProps = {
    role: null,
    onClick: null,
    onSelect: null,
    eventKey: null,
    href: "#",
    className: "",
    style: null,
    active: false,
    disabled: false,
    onTouch: null,
  };
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate = nextProps => JSON.stringify(nextProps) !== JSON.stringify(this.props);

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onTouch) {
      this.props.onTouch(event);
    }

    if (event.defaultPrevented === true) {
      return;
    }

    if (this.props.onSelect) {
      // event.preventDefault();
      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, event);
      }
    }
    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();
    history.push(this.props.href);
  }

  render() {
    const { active, disabled, className, style, children, ...props } = this.props;

    delete props.onSelect;
    delete props.eventKey;

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey;
    delete props.activeHref;
    delete props.onTouch;

    if (!props.role) {
      if (props.href === "#") {
        props.role = "button";
      }
    } else if (props.role === "tab") {
      props["aria-selected"] = active;
    }

    return (
      <li role="presentation" className={classNames(className, { active, disabled })} style={style}>
        <a {...props} disabled={disabled} onClick={this.handleClick}>
          {children}
        </a>
      </li>
    );
  }
}

export default NavItemLink;
