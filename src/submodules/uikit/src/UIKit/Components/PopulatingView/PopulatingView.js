import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Button from "../../Elements/RaisedButton";

import s from "./PopulatingView.scss";

class PopulatingView extends React.PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(["light", "dark"]),
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    actionName: PropTypes.string,
    className: PropTypes.string,
    onActionClick: PropTypes.func,
  };

  static defaultProps = {
    theme: "light",
    subtitle: null,
    actionName: null,
    className: null,
    onActionClick: () => {},
  };

  render() {
    const {
      imageUrl,
      theme,
      title,
      subtitle,
      actionName,
      className,
      onActionClick,
      ...otherProps
    } = this.props;

    return (
      <div className={cn(s.root, theme === "dark" && s.dark, className)} {...otherProps}>
        <img className={s.thumbnail} src={imageUrl} alt="Oops" />
        <h2 className={s.title}>
          {title}
        </h2>
        {subtitle &&
          <div className={s.subtitle}>
            {subtitle}
          </div>}
        {actionName &&
          <div className={s.action}>
            <Button onClick={onActionClick}>
              {actionName}
            </Button>
          </div>}
      </div>
    );
  }
}

export default withStyles(s)(PopulatingView);
