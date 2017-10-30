import React, { PureComponent } from "react";
import { Menu, MenuItem, MenuDivider } from "../../../UIKit/Components/Menu";
import Divider from "../../../UIKit/Elements/Divider";
import RaisedButton from "../../../UIKit/Elements/RaisedButton";

class MenuComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <Divider horizontal />
        <h4 className="m-b-10">Bottom-left: default</h4>
        <RaisedButton id="demo-menu-bottom-left">bottom-left</RaisedButton>
        <Menu target="demo-menu-bottom-left" width={300}>
          <MenuItem icon="close" label="Lorem ipsum dolor." />
          <MenuItem icon="done" label="Lorem ipsum dolor." />
          <MenuDivider />
          <MenuItem icon="done" iconOnRight label="Lorem ipsum dolor." />
          <MenuItem icon="done" iconOnRight iconColor="blue" label="Lorem ipsum dolor." />
          <MenuDivider />
          <MenuItem icon="done" secondaryText="Lorem." label="Lorem ipsum dolor." />
          <MenuItem icon="done" secondaryText="Lorem." label="Lorem ipsum dolor." />
          <MenuDivider />
          <MenuItem icon="delete" iconColor="orange" label="Lorem ipsum dolor." />
        </Menu>

        <Divider horizontal />
        <div style={{ position: "relative" }}>
          <h4 className="m-b-10">Bottom-Right: align=`right`</h4>
          <div className="m-b-10">Must have div wrapper with position: relative</div>
          <RaisedButton bgColor="red" id="demo-menu-bottom-right">
            bottom-right
          </RaisedButton>
          <Menu target="demo-menu-bottom-right" align="right" width={300}>
            <MenuItem icon="close" label="Lorem ipsum dolor." />
            <MenuItem icon="done" label="Lorem ipsum dolor." />
            <MenuDivider />
            <MenuItem icon="done" iconOnRight label="Lorem ipsum dolor." />
            <MenuItem icon="done" iconOnRight iconColor="blue" label="Lorem ipsum dolor." />
            <MenuDivider />
            <MenuItem icon="done" secondaryText="Lorem." label="Lorem ipsum dolor." />
            <MenuItem icon="done" secondaryText="Lorem." label="Lorem ipsum dolor." />
            <MenuDivider />
            <MenuItem icon="delete" iconColor="orange" label="Lorem ipsum dolor." />
          </Menu>
        </div>

        <Divider horizontal />
        <div style={{ position: "relative" }}>
          <h4 className="m-b-10">Top-Right: valign=`top` align=`right`</h4>
          <div className="m-b-10">Must have div wrapper with position: relative</div>
          <RaisedButton bgColor="green" id="demo-menu-top-right">
            Top-right
          </RaisedButton>
          <Menu target="demo-menu-top-right" valign="top" align="right">
            <MenuItem label="Item 1" />
            <MenuItem label="Item 1" />
            <MenuItem label="Item 1" />
            <MenuItem label="Item 1" />
          </Menu>
        </div>

        <Divider horizontal />
        <div style={{ position: "relative" }}>
          <h4 className="m-b-10">Top-Left: valign=`top`</h4>
          <div className="m-b-10">Must have div wrapper with position: relative</div>
          <RaisedButton bgColor="purple" id="demo-menu-top-left">
            Top-left
          </RaisedButton>
          <Menu target="demo-menu-top-left" valign="top">
            <MenuItem label="Item 1" />
            <MenuItem label="Item 1" />
            <MenuItem label="Item 1" />
            <MenuItem label="Item 1" />
          </Menu>
        </div>
      </div>
    );
  }
}

export default MenuComponent;
