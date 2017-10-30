import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import classnames from "classnames";

// import Link from "../Link";
import style from "./style.less";
import Loading from "../Loading";
import BlockTitle from "../BlockTitle";
// import ReportIssueButton from "../ReportIssueButton";

const Block = ({
  className,
  title,
  link,
  children,
  noBackground,
  linkText,
  loading,
  showLink,
  noBlockMarginTop,
  noBlockMarginTopPhone,
  issueButton,
  ...props
}) => {
  const classNames = classnames(
    style.block,
    className,
    noBackground ? style.none : style.normal,
    noBlockMarginTop ? style.noBlockMarginTop : null,
    noBlockMarginTopPhone ? style.noBlockMarginTopPhone : null,
  );

  return (
    <div className={classNames} {...props}>
      <BlockTitle
        title={title}
        link={link}
        showLink={showLink}
        linkText={linkText}
        loading={loading}
      />
      {/* { issueButton && <ReportIssueButton />} */}
      {issueButton || null}
      {loading ? <Loading /> : children}
    </div>
  );
};

Block.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linkText: PropTypes.string,
  noBackground: PropTypes.bool,
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  showLink: PropTypes.bool,
  noBlockMarginTop: PropTypes.bool,
  noBlockMarginTopPhone: PropTypes.bool,
  issueButton: PropTypes.any,
};

Block.defaultProps = {
  className: "",
  title: "",
  noBackground: false,
  linkText: "View all",
  link: null,
  loading: false,
  showLink: false,
  noBlockMarginTop: false,
  noBlockMarginTopPhone: false,
  issueButton: "",
};

export default withStyles(style)(Block);
