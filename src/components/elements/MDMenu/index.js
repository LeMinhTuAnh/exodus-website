/* eslint import/no-named-default: "off" */
/* eslint react/no-array-index-key: "off" */
import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { default as Menu, MenuItem } from "react-mdl/lib/Menu";
import IconButton from "react-mdl/lib/IconButton";

// const MenuItem = Menu.MenuItem;
// import cn from "classnames";

import s from "./style.less"; // eslint-disable-line

class MDMenu extends React.Component {
  static propTypes = {
    menuItems: PropTypes.array,
    target: PropTypes.string.isRequired,
    userButtonDefault: PropTypes.bool,
  };
  static defaultProps = {
    menuItems: [],
    userButtonDefault: false,
  };

  render() {
    const { menuItems = [], userButtonDefault = false, target, ...other } = this.props;
    const menuComponent = [];
    menuItems.forEach((item, i) => {
      menuComponent.push(<MenuItem key={i}>{item}</MenuItem>);
    });
    return (
      <div>
        {userButtonDefault ? <IconButton name="more_vert" id="demo-menu-lower-right" /> : null}
        <Menu target={target} {...other}>
          {/* <MenuItem>
            <IconButton name={"announcement"} />
            Some Action
          </MenuItem>
          <MenuItem>Another Action</MenuItem>
          <MenuItem disabled>Disabled Action</MenuItem>
          <MenuItem>Yet Another Action</MenuItem> */}
          {menuComponent}
        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(MDMenu);
