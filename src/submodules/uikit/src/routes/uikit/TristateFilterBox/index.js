import React, { PureComponent } from "react";
import TristateFilterBox from "../../../UIKit/Elements/TristateFilterBox";

class TristateFilterBoxComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>TristateFilterBox</h1>
        <br />
        <h4 className="m-b-10">default</h4>
        <TristateFilterBox label="Lorem ipsum dolor sit amet." />
        <br />
        <br />

        <h4 className="m-b-10">labelColor=`red`</h4>
        <TristateFilterBox
          labelColor="red"
          label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, amet!"
        />
      </div>
    );
  }
}

export default TristateFilterBoxComponent;
