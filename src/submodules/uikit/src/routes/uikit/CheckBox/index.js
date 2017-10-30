import React, { PureComponent } from "react";
import CheckBox from "../../../UIKit/Elements/CheckBox";

class CheckBoxComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Checkbox</h1>
        <br />

        <h4 className="m-b-10">default</h4>
        <CheckBox label="Lorem ipsum dolor sit amet." />

        <br />
        <br />

        <h4 className="m-b-10">defaultChecked</h4>
        <CheckBox label="Lorem ipsum dolor sit amet." defaultChecked />

        <br />
        <br />

        <h4 className="m-b-10">disabled</h4>
        <CheckBox label="Lorem ipsum." disabled />

        <br />
        <br />

        <h4 className="m-b-10">checked</h4>
        <CheckBox label="Lorem ipsum dolor." checked />
      </div>
    );
  }
}

export default CheckBoxComponent;
