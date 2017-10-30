import React, { Component } from "react";
import FAB from "../../../UIKit/Elements/FAB";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>FAB</h1>
        <br />
        <br />
        <h4>Default:</h4>
        <FAB />
        <br />
        <br />
        <h4>Size small &amp; color Warning &amp; icon more_vert:</h4>
        <FAB size="small" bgColor="#FF5722" iconName="more_vert" />
        <br />
        <br />
        <h4>Size small &amp; color Neutral1 &amp; iconColor Primary:</h4>
        <FAB size="small" bgColor="#fafafa" iconColor="#29B6F6" />
        <br />
        <br />
        <h4>Disabled:</h4>
        <FAB disabled />
        <br />
        <br />
        <FAB size="small" iconName="more_vert" bgColor="#FF5722" iconColor="#29B6F6" disabled />
        <br />
        <br />
      </div>
    );
  }
}

export default Index;
