import React, { PureComponent } from "react";
import Switch from "../../../UIKit/Elements/Switch";

class SwitchComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Switch</h1>
        <br />

        <h4>Default Switch</h4>
        <Switch label="Lorem ipsum." />
        <br />
        <br />

        <h4>rightLabel</h4>
        <Switch label="Lorem ipsum." rightLabel />
        <br />
        <br />

        <h4>disabled</h4>
        <Switch label="Lorem ipsum." disabled />
        <Switch label="Lorem ipsum." rightLabel disabled />

        <br />
        <br />

        <h3>darkTheme</h3>
        <div style={{ background: "black" }}>
          <br />
          <h4 style={{ color: "white" }}>darkTheme</h4>
          <Switch darkTheme label="Lorem ipsum." />
          <br />
          <br />

          <h4 style={{ color: "white" }}>rightLabel</h4>
          <Switch label="Lorem ipsum." darkTheme rightLabel />
          <br />
          <br />

          <h4 style={{ color: "white" }}>disabled</h4>
          <Switch label="Lorem ipsum." darkTheme disabled />
          <Switch label="Lorem ipsum." darkTheme rightLabel disabled />
        </div>
      </div>
    );
  }
}

export default SwitchComponent;
