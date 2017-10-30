import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import IconButton from "../../Elements/IconButton";
import RaisedButton from "../../Elements/RaisedButton";

import s from "./GetAppBar.scss";

class GetAppBar extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    text: "Read on Manga Rock app",
    className: null,
  };

  constructor(props) {
    super(props);

    const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent || navigator.vendor || window.opera,
    );

    this.state = {
      isMobile: isMobileDevice,
    };
  }

  render() {
    const { text, className, ...otherProps } = this.props;
    const { isMobile } = this.state;

    if (!isMobile) return null;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        <IconButton iconSize={16} icon="close" />
        <div className={s.text}>
          {text}
        </div>
        <RaisedButton className={s.viewButton}>VIEW IN APP</RaisedButton>
      </div>
    );
  }
}

export default withStyles(s)(GetAppBar);
