import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Icon from "../../Elements/Icon";

import s from "./Reminder.scss";

class Reminder extends PureComponent {
  static propTypes = {
    onScreenTime: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.timeoutId = null;

    this.state = {
      active: true,
    };
  }

  componentDidMount() {
    const { onScreenTime } = this.props;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.state.active) {
      this.timeoutId = setTimeout(this.clearTimer, onScreenTime * 1000);
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  clearTimer = () => {
    this.timeoutId = null;
    this.setState({ active: false });
  };

  handeClick = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const { children, ...otherProps } = this.props;

    delete otherProps.onScreenTime;

    return (
      <div className={cn(s.root, !this.state.active && s.deactive)} {...otherProps}>
        <button onClick={this.handeClick} className={s.closeButton}>
          <Icon color="white" name="close" />
        </button>
        {children}
      </div>
    );
  }
}

export default withStyles(s)(Reminder);
