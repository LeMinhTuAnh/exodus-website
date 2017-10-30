import React, { PureComponent } from "react";
import StatusIndicator from "../../../UIKit/Elements/StatusIndicator";

class StatusIndicatorComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Status Indicator</h1>
        <br />
        <br />
        <StatusIndicator text="Reading" circleColor="primary" />
        <br />
        <br />
        <StatusIndicator text="Completed" circleColor="#4AC471" />
        <br />
        <br />
        <StatusIndicator text="Read Later" circleColor="blue" />
        <br />
        <br />
        <StatusIndicator text="Reading" circleColor="lightblue" />
        <br />
        <br />
        <StatusIndicator text="On Hold" circleColor="yellow" />
        <br />
        <br />
        <StatusIndicator text="Yolo" circleColor="purple" />
      </div>
    );
  }
}

export default StatusIndicatorComponent;
