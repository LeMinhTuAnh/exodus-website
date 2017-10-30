import React, { PureComponent } from "react";
import { Tabs, Tab } from "../../../UIKit/Components/Tabs";

class TabsComponent extends PureComponent {
  render() {
    return (
      <div>
        <Tabs activeTab={1}>
          <Tab title="YOLO">tab 1</Tab>
          <Tab title="HIHI">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, obcaecati.
          </Tab>
          <Tab title="Lorem">
            <div style={{ color: "red" }}>YOLO</div>
          </Tab>
        </Tabs>
        <br />
        <hr />
        <br />
        <div>with ripple effect</div>
        <Tabs ripple>
          <Tab title="YOLO">tab 1</Tab>
          <Tab title="HIHI">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, obcaecati.
          </Tab>
          <Tab title="HIHI">
            <div style={{ color: "red" }}>YOLO</div>
            <div style={{ color: "red" }}>YOLO</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TabsComponent;
