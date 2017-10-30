import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import Link from "../../Elements/Link";
import NewIndicator from "../../Elements/NewIndicator";

import s from "./MangaGridItem.scss"; // eslint-disable-line css-modules/no-unused-class

class NewChapter extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, url, className, ...otherProps } = this.props;

    return (
      <Link to={url} className={cn(s.newChapter, className)} {...otherProps}>
        <div>
          <NewIndicator className={s.newIndicator} />
        </div>
        <div className={s.text}>
          {children}
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(NewChapter);
