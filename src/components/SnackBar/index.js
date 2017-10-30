import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import cn from "classnames";
import Snackbar from "react-mdl/lib/Snackbar";
import Button from "react-mdl/lib/Button";

import * as REDUCERS from "../../constants/reducers";

import style from "./style.less"; // eslint-disable-line

const mapStateToProps = state => ({
  text: (state[REDUCERS.REDUCER_SNACKBAR] && state[REDUCERS.REDUCER_SNACKBAR].text) || "",
  button: (state[REDUCERS.REDUCER_SNACKBAR] && state[REDUCERS.REDUCER_SNACKBAR].button) || {},
  barID: (state[REDUCERS.REDUCER_SNACKBAR] && state[REDUCERS.REDUCER_SNACKBAR].barID) || 0,
});

const mapDispatchToProps = () => ({});

class SnackBarContainer extends React.Component {
  static propTypes = {
    button: PropTypes.object,
    text: PropTypes.string,
    barID: PropTypes.any,
    // closeFunc: PropTypes.func,
    handleTimeoutSnackbar: PropTypes.func,
  };

  static defaultProps = {
    button: {},
    text: "",
    closeFunc: () => {},
    handleTimeoutSnackbar: () => {},
    barID: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  // componentWillMount() {
  //   console.log(this.props);
  // }

  componentWillReceiveProps = nextProps => {
    if (this.props.barID !== nextProps.barID) {
      // if (this.timeoutFunc > 0) {
      //   clearTimeout(this.timeoutFunc);
      //   this.timeoutFunc = 0;
      // }
      this.setState({ on: true });
      // this.timeoutFunc = setTimeout(() => {
      //   // close HUD after 1.5s
      //   this.timeoutFunc = 0;
      //   this.setState({ on: false });
      //   this.props.closeFunc();
      // }, 2000);
    }
  };
  onCloseSnackbar = () => {
    this.setState({ on: false });
  };
  handleTimeoutSnackbar = () => {
    this.setState({ on: false });
    this.props.handleTimeoutSnackbar();
  };

  render() {
    const { text, button = {} } = this.props;
    const { on } = this.state;

    return (
      <Snackbar
        active={on}
        // onClick={this.handleClickActionSnackbar}
        onTimeout={this.handleTimeoutSnackbar}
        // action="Undo"
        style={{ zIndex: 9999 }}
      >
        <div className={style["bar-content"]}>
          <div className={style["bar-text"]}>{text}</div>
          {button.text ? (
            <Button
              className={style["bar-button"]}
              style={{ color: button.color || "#28b5f5" }}
              onClick={button.onClick ? button.onClick : this.onCloseSnackbar}
            >
              {button.text}
            </Button>
          ) : null}
        </div>
      </Snackbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: true,
  areStatesEqual: (prev, next) =>
    prev[REDUCERS.REDUCER_SNACKBAR].barID === next[REDUCERS.REDUCER_SNACKBAR].barID,
})(withStyles(style)(SnackBarContainer));
