import React, { PureComponent } from "react";
import HUD from "../../../UIKit/Components/HUD";
import RaisedButton from "../../../UIKit/Elements/RaisedButton";

import url from "./modeVertical.svg";

class HUDComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOnClick = () => {
    this.setState({
      open: true,
    });

    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1>HUD</h1>
        <br />
        <RaisedButton onClick={this.handleOnClick}>Show HUD</RaisedButton>
        <HUD iconUrl={url} active={this.state.open} text="YOLO" />
      </div>
    );
  }
}

export default HUDComponent;
