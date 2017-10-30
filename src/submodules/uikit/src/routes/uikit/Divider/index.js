import React, { PureComponent } from "react";
import Divider from "../../../UIKit/Elements/Divider";

class DividerComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Divider</h1>
        <br />
        <br />
        <h4>Horizontal:</h4>
        <br />
        <Divider horizontal />
        <br />
        <br />
        <h4>Vertical:</h4>
        <br />
        <div style={{ height: 200 }}>
          <Divider vertical />
        </div>
      </div>
    );
  }
}

export default DividerComponent;
