import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import classnames from "classnames";
import style from "./style.scss";


class Loading extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { className, ...props } = this.props;
    let classNames = style.spinnerContainer;
    if (className) {
      classNames = classnames(style.spinnerContainer, className);
    }
    return (
      <div className={classNames} {...props}>
        <svg className={style.spinner} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className={style.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
        </svg>
      </div>
    );
  }
}

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: "",
};

export default withStyles(style)(Loading);
