import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Thumbnail from "../Thumbnail";

import AvatarPlaceholder from "../../svg/avatar_placeholder.svg";

import s from "./Avatar.scss";

class Avatar extends PureComponent {
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    loadingSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    className: null,
    src: AvatarPlaceholder,
    alt: "",
    loadingSize: null,
  };

  render() {
    const { className, loadingSize, ...otherProps } = this.props;

    return (
      <Thumbnail loadingSize={loadingSize} className={cn(s.root, className)} {...otherProps} />
    );
  }
}

export default withStyles(s)(Avatar);
