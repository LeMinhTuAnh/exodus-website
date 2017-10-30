import React, { PureComponent } from "react";
import IconButton from "../../../UIKit/Elements/IconButton";

class IconButtonComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Icon Button</h1>
        <br />
        <br />
        <h4>Default:</h4>
        <IconButton icon="add" />
        <br />
        <br />
        <h4>With bgColor:</h4>
        <div>
          <IconButton icon="delete" bgColor="red" />
        </div>
        <br />
        <br />
        <h4>With both iconColor &amp; bgColor:</h4>
        <div>
          <IconButton icon="delete" iconColor="red" bgColor="#FAFAFA" />
        </div>
        <br />
        <br />
        <h4>Disabled:</h4>
        <div>
          <IconButton icon="add" disabled />
        </div>
        <div>
          <IconButton icon="delete" iconColor="red" bgColor="#FAFAFA" disabled />
        </div>
      </div>
    );
  }
}

export default IconButtonComponent;
