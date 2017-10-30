import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

// submodules
import { Menu, MenuItem } from "../../../submodules/uikit/src/UIKit/Components/Menu";
import IconButton from "../../../submodules/uikit/src/UIKit/Elements/IconButton";

import s from "./ReportIssueButton.scss";

class ReportIssueButton extends React.Component {
  static propTypes = {
    onReportIssueClick: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    onReportIssueClick: () => {},
    className: null,
  };

  render() {
    const { onReportIssueClick, className, ...otherProps } = this.props;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        <div id="icon-menu-button">
          <IconButton icon={"more_horiz"} />
        </div>
        <Menu target="icon-menu-button" align="right" width={160} style={{ textAlign: "left" }}>
          <MenuItem icon="sms_failed" onClick={onReportIssueClick} label="Report Issue" />
        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(ReportIssueButton);
