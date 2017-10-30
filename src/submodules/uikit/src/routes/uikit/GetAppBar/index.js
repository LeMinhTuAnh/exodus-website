import React, { PureComponent } from "react";
import GetAppBar from "../../../UIKit/Components/GetAppBar";

class GetAppBarComponent extends PureComponent {
  render() {
    return (
      <div>
        <div>Show on mobile device only</div>
        <GetAppBar />
      </div>
    );
  }
}

export default GetAppBarComponent;
