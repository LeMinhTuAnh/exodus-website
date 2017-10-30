import React, { PureComponent } from "react";
import FlatButton from "../../../UIKit/Elements/FlatButton";

class FlatButtonComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Flat Button</h1>
        <br />
        <br />
        <h4>Default:</h4>
        <FlatButton>Hello world</FlatButton>
        <br />
        <br />
        <h4>Color Danger:</h4>
        <FlatButton color="#FF3333">Hello world</FlatButton>
        <br />
        <br />
        <h4>With icon:</h4>
        <FlatButton icon="add">Add to collection</FlatButton>
        <br />
        <br />
        <FlatButton icon="done" textBefore>
          Give a fuck
        </FlatButton>
        <br />
        <br />
        <h4>Disabled:</h4>
        <FlatButton disabled>Hello world</FlatButton>
        <FlatButton textPosition="after" icon="delete" disabled>
          Delete
        </FlatButton>
        <FlatButton icon="done" textBefore disabled>
          Give a fuck
        </FlatButton>
      </div>
    );
  }
}

export default FlatButtonComponent;
