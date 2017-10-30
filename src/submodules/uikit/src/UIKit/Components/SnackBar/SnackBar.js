/**
 * This component uses react-mdl SnackBar
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./SnackBar.oscss";

const ANIMATION_LENGTH = 250;

const propTypes = {
  buttonLabel: PropTypes.string,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onButtonClick: PropTypes.func,
  onTimeout: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  children: PropTypes.string.isRequired,
};

const defaultProps = {
  timeout: 2000,
  onButtonClick: () => {},
  className: null,
  buttonLabel: null,
};

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.clearTimer = this.clearTimer.bind(this);
    this.timeoutId = null;
    this.clearTimeoutId = null;
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.active,
    });
  }

  componentDidUpdate() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (this.props.active) {
      this.timeoutId = setTimeout(this.clearTimer, this.props.timeout);
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.clearTimeoutId) {
      clearTimeout(this.clearTimeoutId);
      this.clearTimeoutId = null;
    }
  }

  clearTimer() {
    this.timeoutId = null;
    this.setState({ open: false });

    this.clearTimeoutId = setTimeout(() => {
      this.clearTimeoutId = null;
      this.props.onTimeout();
    }, ANIMATION_LENGTH);
  }

  render() {
    const { buttonLabel, active, className, children, onButtonClick, ...otherProps } = this.props;
    const { open } = this.state;

    const classes = classNames(
      "mdl-snackbar",
      {
        "mdl-snackbar--active": open,
      },
      className,
    );

    delete otherProps.onTimeout;
    delete otherProps.timeout;

    return (
      <div className={classes} aria-hidden={!open} {...otherProps}>
        <div className={classNames("mdl-snackbar__text")}>
          {active && children}
        </div>
        {active &&
          buttonLabel &&
          <button className="mdl-snackbar__action" type="button" onClick={onButtonClick}>
            {buttonLabel}
          </button>}
      </div>
    );
  }
}

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default withStyles(s)(Snackbar);
