import React, { PureComponent } from "react";
import NewIndicator from "../../../UIKit/Elements/NewIndicator";

class NewIndicatorCompnent extends PureComponent {
  render() {
    return (
      <div>
        <h1>New Indicator</h1>
        <br />
        <br />
        <h4>Default:</h4>
        <NewIndicator />
        <br />
        <br />
        <h4>Color Warning:</h4>
        <NewIndicator color="#FF5722" />
      </div>
    );
  }
}

export default NewIndicatorCompnent;
