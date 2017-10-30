import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./HUD.scss";

class HUD extends React.PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    iconUrl: PropTypes.string,
    text: PropTypes.string.isRequired,
    appearTime: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    iconUrl: null,
    appearTime: 1.5, // seconds
    className: null,
  };

  constructor(props) {
    super(props);

    this.timeoutId = null;

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
      this.timeoutId = setTimeout(this.clearTimer, this.props.appearTime * 1000);
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
    this.setState({ open: false });
  };

  render() {
    const { iconUrl, text, className, active, ...otherProps } = this.props;
    const { open } = this.state;

    const rootClassNames = cn(s.root, open && s.on, !open && s.off, className);

    delete otherProps.appearTime;

    return (
      <div className={rootClassNames} {...otherProps}>
        {iconUrl &&
          <div className={s.imgWrap}>
            <img src={iconUrl} alt="HUD" />
          </div>}
        <div className={s.text}>
          {text}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HUD);
