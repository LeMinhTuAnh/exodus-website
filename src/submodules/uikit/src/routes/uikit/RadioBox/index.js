import React, { PureComponent } from "react";
import { RadioBox, RadioGroup } from "../../../UIKit/Elements/RadioBox";

class RadioBoxComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>RadioBox</h1>
        <br />
        <RadioGroup container="div" childContainer="div" name="demo2" value="opt2">
          <RadioBox value="opt1">Option one</RadioBox>
          <RadioBox value="opt2">Option two</RadioBox>
          <RadioBox value="opt3" disabled>
            Disabled option
          </RadioBox>
        </RadioGroup>
      </div>
    );
  }
}

export default RadioBoxComponent;
