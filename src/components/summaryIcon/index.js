import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Image from "react-bootstrap/lib/Image";

import s from "./style.less";

class SummaryIcon extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };

  static defaultProps = {
    caption: null,
  };

  render() {
    const _props = Object.assign({}, this.props);

    delete _props.caption;
    delete _props.title;

    return (
      <div className={s.root} {..._props}>
        <Image src={this.props.src} alt="Icon" responsive />
        <div className={s.title}>
          {this.props.title}
        </div>
        {this.props.caption &&
          <div className={s.caption}>
            {this.props.caption}
          </div>}
      </div>
    );
  }
}

export default withStyles(s)(SummaryIcon);
