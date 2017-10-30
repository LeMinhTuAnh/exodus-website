/* eslint
  react/no-unused-prop-types: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import cn from "classnames";

import * as REDUCERS from "../../constants/reducers";

// import style from "./style.less"; // eslint-disable-line

import HUD from "../../submodules/uikit/src/UIKit/Components/HUD";

const mapStateToProps = state => ({
  image:
    (state[REDUCERS.REDUCER_HUD] && state[REDUCERS.REDUCER_HUD].image) || "",
  text: (state[REDUCERS.REDUCER_HUD] && state[REDUCERS.REDUCER_HUD].text) || "",
  hudID:
    (state[REDUCERS.REDUCER_HUD] && state[REDUCERS.REDUCER_HUD].hudID) || 0,
});

class HUDContainer extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    hudID: PropTypes.any,
    closeFunc: PropTypes.func,
  };

  static defaultProps = {
    image: "",
    text: "",
    closeFunc: () => {},
    hudID: 0,
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
    if (this.props.hudID !== nextProps.hudID) {
      if (this.onTimeout > 0) {
        clearTimeout(this.onTimeout);
        this.onTimeout = 0;
      }
      if (this.offTimeout > 0) {
        clearTimeout(this.offTimeout);
        this.offTimeout = 0;
      }

      this.onTimeout = setTimeout(() => {
        this.onTimeout = 0;
        this.setState({ on: true });
        if (this.offTimeout > 0) {
          clearTimeout(this.offTimeout);
          this.offTimeout = 0;
        }
        this.offTimeout = setTimeout(() => {
          // close HUD after 1.5s
          this.offTimeout = 0;
          this.setState({ on: false });
          this.props.closeFunc();
        }, 1500);
      }, 100);
    }
  };

  onTimeout = 0;
  offTimeout = 0;

  render() {
    const { text, image } = this.props;
    // const { text } = this.props;
    // console.log(text);
    const { on } = this.state;
    // const showHUD = true;
    return (
      <HUD
        active={on}
        text={text}
        iconUrl={image && image !== null ? image : ""}
      />
    );
  }
}

export default connect(mapStateToProps, null, null, {
  pure: true,
  areStatesEqual: (prev, next) =>
    prev[REDUCERS.REDUCER_HUD].hudID === next[REDUCERS.REDUCER_HUD].hudID,
})(withStyles()(HUDContainer));
