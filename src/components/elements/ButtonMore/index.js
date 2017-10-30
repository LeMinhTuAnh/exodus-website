import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import style from "./style.less";

class ButtonMore extends React.Component {
  static propTypes = {
    opened: PropTypes.bool,
    label: PropTypes.string,
    openedLabel: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    opened: false,
    label: "Show more",
    openedLabel: "Show less",
    onClick: null,
  }

  onButtonClick = (event) => {
    event.preventDefault();
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render = () => {
    const { opened, label, openedLabel } = this.props;
    return (
      <div className={style.buttonMore}>
        <button
          className={style.button}
          onClick={this.onButtonClick}
        >
          <span className={opened ? style.opened : ""}>{opened ? openedLabel : label}</span>
        </button>
      </div>
    );
  }
}

export default withStyles(style)(ButtonMore);
