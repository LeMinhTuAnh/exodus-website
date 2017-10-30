import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import * as REDUCERS from "../../constants/reducers";

import style from "./style.less"; // eslint-disable-line

const mapStateToProps = state => ({
  image: (state[REDUCERS.REDUCER_HUD] && state[REDUCERS.REDUCER_HUD].image) || "",
  text: (state[REDUCERS.REDUCER_HUD] && state[REDUCERS.REDUCER_HUD].text) || "",
  hudID: (state[REDUCERS.REDUCER_HUD] && state[REDUCERS.REDUCER_HUD].hudID) || 0,
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
      }, 200);
    }
  };

  onTimeout = 0;
  offTimeout = 0;

  render() {
    const { text, image } = this.props;
    const { on } = this.state;
    // const showHUD = true;
    return (
      <div className={cn(style.hud, on ? style.on : style.off)}>
        {image ? <img alt={"hud"} src={image} className={style["hud-image"]} /> : null}
        <div className={style["hud-text"]} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null, null, {
  pure: true,
  areStatesEqual: (prev, next) =>
    prev[REDUCERS.REDUCER_HUD].hudID === next[REDUCERS.REDUCER_HUD].hudID,
})(withStyles(style)(HUDContainer));
