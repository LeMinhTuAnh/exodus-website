import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";

import s from "./Title.scss"; // eslint-disable-line

class PageTitle extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    actionName: PropTypes.string,
    actionLink: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    actionName: null,
    actionLink: null,
  };

  render() {
    const { className, children, actionName, actionLink, ...otherProps } = this.props;

    const classname = cn(s.root, className);

    return (
      <div className={s.pageTitleWrap}>
        <div className={classname} {...otherProps}>
          <h1 className={s.pageTitle}>
            {children}
          </h1>
          {actionLink &&
            <Link to={actionLink} className={s.link}>
              {actionName}
            </Link>}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PageTitle);
