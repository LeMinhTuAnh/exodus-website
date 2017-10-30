import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import cn from "classnames";

import LayoutWrap from "../../submodules/uikit/src/UIKit/Layout";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HUDContainer from "./HUDContainer";

import s from "./Layout.scss";
import globalStyle from "./Global.oscss";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    return (
      <LayoutWrap className={this.props.className}>
        <Header id="header" />
        <section className={s.page} id="page-content">
          {this.props.children}
        </section>
        <Footer id="footer" />

        {/* <HUD /> */}
        <HUDContainer />
      </LayoutWrap>
    );
  }
}

export default withStyles(globalStyle, s)(Layout);
