import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Link from "../Link";
import style from "./style.less";


const BlockTitle = ({ title, link, linkText, loading, showLink }) => {
  if (!title) return null;
  return (
    <h2 className={style.title}>
      {!loading && showLink && link && <Link className={style.link} to={link}>{linkText}</Link>}
      {title}
    </h2>
  );
};

BlockTitle.propTypes = {
  title: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkText: PropTypes.string,
  loading: PropTypes.bool,
  showLink: PropTypes.bool,
};

BlockTitle.defaultProps = {
  title: "",
  link: null,
  linkText: "View all",
  loading: false,
  showLink: false,
};

export default withStyles(style)(BlockTitle);
