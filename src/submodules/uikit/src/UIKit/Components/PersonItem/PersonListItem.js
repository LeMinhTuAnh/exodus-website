import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";
import Avatar from "../Avatar";

import s from "./PersonListItem.scss";

class PersonListItem extends React.PureComponent {
  static propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    personUrl: PropTypes.string.isRequired,
    className: PropTypes.string,
    loadingSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    className: null,
    loadingSize: 16,
  };

  render() {
    const { avatarUrl, name, personUrl, className, loadingSize, ...otherProps } = this.props;

    return (
      <Link className={cn(s.root, className)} to={personUrl} {...otherProps}>
        <div className={s.avatarWrap}>
          <Avatar loadingSize={loadingSize} className={s.avatar} src={avatarUrl} />
        </div>
        <h4 className={s.name}>{name}</h4>
      </Link>
    );
  }
}

export default withStyles(s)(PersonListItem);
