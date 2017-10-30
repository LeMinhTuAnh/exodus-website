import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import CSSTransitionGroup from "react-transition-group/CSSTransition";

import s from "./LightBox.scss";

class LightBox extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    active: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    active: false,
  };

  render() {
    const { children, className, active, ...otherProps } = this.props;

    const rootClassName = cn(s.lightBox, className);

    return (
      <CSSTransitionGroup
        in={active}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames={{
          enter: s.lightBoxEnter,
          enterActive: s.lightBoxEnterActive,
          exit: s.lightBoxExit,
          exitActive: s.lightBoxExitActive,
        }}
      >
        <div className={rootClassName} {...otherProps}>
          {children}
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default withStyles(s)(LightBox);
