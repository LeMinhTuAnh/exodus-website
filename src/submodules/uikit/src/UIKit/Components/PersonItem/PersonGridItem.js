import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";
import Avatar from "../Avatar";

import s from "./PersonGridItem.scss";

class PersonGridItem extends React.PureComponent {
  static propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    personUrl: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { avatarUrl, name, personUrl, className, ...otherProps } = this.props;

    return (
      <Link className={cn(s.root, className)} to={personUrl} {...otherProps}>
        <Avatar className={s.avatar} src={avatarUrl} />
        <h4 className={s.name}>
          {name}
        </h4>
      </Link>
    );
  }
}

export default withStyles(s)(PersonGridItem);
