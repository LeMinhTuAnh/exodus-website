import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Link from "../Link";
import style from "./style.less";

const PageTitle = ({ className, title, backLink, backText }) => {
  if (!title) return null;

  const classNames = classnames(style.pageTitle, className);

  return (
    <div className={classNames}>
      <h1>
        {title}
      </h1>
      {backLink &&
        <Link className={style.backLink} to={backLink}>
          <i style={{ top: 5, position: "relative", fontSize: 20 }} className="material-icons">
            chevron_left
          </i>
          {backText}
        </Link>}
    </div>
  );
};

PageTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string,
  backText: PropTypes.string,
};

PageTitle.defaultProps = {
  className: "",
  backText: "Back",
  backLink: "/",
};

export default withStyles(style)(PageTitle);
