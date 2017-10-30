import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./ReminderStack.scss";

class Reminder extends PureComponent {
  static propTypes = {
    onScreenTime: PropTypes.number,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    onScreenTime: 5, // seconds
  };

  render() {
    const { children, onScreenTime } = this.props;

    return (
      <div className={s.root}>
        {React.Children.map(children, child => React.cloneElement(child, { onScreenTime }))}
      </div>
    );
  }
}

export default withStyles(s)(Reminder);
