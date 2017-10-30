import React, { PureComponent } from "react";
import Loading from "../../../UIKit/Elements/Loading";

class LoadingComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Loading Indicator</h1>
        <br />
        <br />
        <h4>Loading Indicator - Default:</h4>
        <br />
        <Loading />
        <br />
        <br />
        <h4>Loading Indicator - Size 28x28:</h4>
        <br />
        <Loading size={28} />
        <br />
        <br />
        <h4>Loading Indicator - Size 16x16:</h4>
        <br />
        <Loading size={16} />
      </div>
    );
  }
}

export default LoadingComponent;
