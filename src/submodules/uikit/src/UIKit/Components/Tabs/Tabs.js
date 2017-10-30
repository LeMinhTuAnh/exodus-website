/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Children } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./Tabs.scss";

class Tabs extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ripple: PropTypes.bool,
    activeTab: PropTypes.number,
  };

  static defaultProps = {
    ripple: false,
    activeTab: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.activeTab,
    };
  }

  // Get tab title
  getTitle = (child, tabIndex) => {
    const { title, ...otherProps } = child.props;
    const { activeTab } = this.state;
    const { ripple } = this.props;

    const titleClass = cn(
      ripple && "mdl-js-button",
      ripple && "mdl-js-ripple-effect",
      s.title,
      activeTab === tabIndex && s.active,
    );

    return (
      <h4
        role="button"
        className={titleClass}
        onClick={() => this.handleOnClick(tabIndex)}
        {...otherProps}
      >
        {title}
      </h4>
    );
  };

  // Get tab content
  getContent = (child, tabIndex) => {
    const { children } = child.props;

    if (this.state.activeTab !== tabIndex) return null;

    return children;
  };

  handleOnClick = tabIndex => {
    this.setState({
      activeTab: tabIndex,
    });
  };

  render() {
    const { children, ...otherProps } = this.props;

    delete otherProps.ripple;
    delete otherProps.activeTab;

    return (
      <div {...otherProps}>
        {/* Tab title */}
        <div className={s.titleList}>
          {Children.map(children, this.getTitle)}
        </div>

        {/* Tab content */}
        <div>
          {Children.map(children, this.getContent)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Tabs);
