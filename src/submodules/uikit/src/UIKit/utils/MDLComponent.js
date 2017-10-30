/* React-mdl Util */
/* eslint-disable */

import { Children, Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export default class MDLComponent extends Component {
  componentDidMount() {
    if (process.env.BROWSER) {
      if (this.props.recursive) {
        window.componentHandler.upgradeElements(ReactDOM.findDOMNode(this));
      } else {
        window.componentHandler.upgradeElement(ReactDOM.findDOMNode(this));
      }
    }
  }

  componentWillUnmount() {
    if (process.env.BROWSER) {
      window.componentHandler.downgradeElements(ReactDOM.findDOMNode(this));
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

MDLComponent.propTypes = {
  recursive: PropTypes.bool,
};
