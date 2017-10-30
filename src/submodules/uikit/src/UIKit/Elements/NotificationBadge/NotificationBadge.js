import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./NotificationBadge.scss";

class NotificationBadge extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    badgeNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    className: null,
    badgeNumber: null,
  };

  render() {
    const { badgeNumber, className, ...otherProps } = this.props;

    let element;
    if (badgeNumber) {
      element = (
        <div className={cn(s.rootWithNumber, className)} {...otherProps}>
          {badgeNumber}
        </div>
      );
    } else {
      element = <div className={cn(s.rootNoNumber, className)} />;
    }
    return element;
  }
}

export default withStyles(s)(NotificationBadge);
