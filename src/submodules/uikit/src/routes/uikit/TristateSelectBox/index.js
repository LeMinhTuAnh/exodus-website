import React, { PureComponent } from "react";
import TristateSelectBox from "../../../UIKit/Elements/TristateSelectBox";

class TristateSelectBoxComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>TristateSelectBox</h1>
        <br />

        <h4 className="m-b-10">default</h4>
        <TristateSelectBox label="Lorem ipsum dolor sit amet." />
        <br />
        <br />

        <h4 className="m-b-10">labelColor=`red`</h4>
        <TristateSelectBox
          labelColor="red"
          label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, amet!"
        />
      </div>
    );
  }
}

export default TristateSelectBoxComponent;
