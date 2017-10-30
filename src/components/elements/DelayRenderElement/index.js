import React from "react";

export default class DelayRenderElement extends React.Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.renderTimeout > 0) {
      clearTimeout(this.renderTimeout);
      this.renderTimeout = 0;
    }

    if (!process.env.BROWSER) {
      return true;
    }

    const priorityProps = this.getPriorityProps();
    if (priorityProps.length > 0) {
      for (let i = 0; i < priorityProps.length; i++) {
        const prop = priorityProps[i];
        if (this.props[prop] !== nextProps[prop]) {
          return true;
        }
      }
    }

    const priorityStates = this.getPriorityStates();
    if (priorityStates.length > 0) {
      if (this.state != null && this.state instanceof Object) {
        for (let i = 0; i < priorityStates.length; i++) {
          const prop = priorityStates[i];
          if (this.state[prop] !== nextState[prop]) {
            return true;
          }
        }
      } else return true;
    }

    this.renderTimeout = setTimeout(() => {
      this.forceUpdate();
    }, 100);

    return false;
  };

  componentWillUnmount = () => {
    if (this.renderTimeout > 0) {
      clearTimeout(this.renderTimeout);
      this.renderTimeout = 0;
    }
  };

  getPriorityProps = () => ["isLoading"];
  getPriorityStates = () => [];

  renderTimeout = 0;
}
