import React, { PureComponent } from "react";
import RaisedButton from "../../../UIKit/Elements/RaisedButton";

class RaisedButtonComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Raised Button</h1>
        <br />
        <br />
        <h4>Default:</h4>
        <RaisedButton>Hello world</RaisedButton>
        <br />
        <br />
        <h4>Color = Danger:</h4>
        <RaisedButton bgColor="#FF3333">Dangerous</RaisedButton>
        <br />
        <br />
        <h4>With icon:</h4>
        <RaisedButton icon="add">Add to collection</RaisedButton>
        <br />
        <br />
        <RaisedButton icon="keyboard_arrow_right" textBefore>
          See more details
        </RaisedButton>
        <br />
        <br />
        <h4>With both bgColor &amp; textColor (I know it&apos;s weird):</h4>
        <RaisedButton bgColor="#BB6CFF" textColor="#FFD367">
          Hello world
        </RaisedButton>
        <br />
        <br />
        <RaisedButton bgColor="#F7596B" textColor="#FAFAFA" textBefore icon="add">
          Add more coin
        </RaisedButton>
        <br />
        <br />
        <h4>Disabled:</h4>
        <RaisedButton disabled>Hello world</RaisedButton>
        <br />
        <br />
        <RaisedButton bgColor="#F7596B" textColor="#FAFAFA" textBefore icon="add" disabled>
          Add more coin
        </RaisedButton>
        <br />
        <br />
        <RaisedButton style={{ width: 500 }} icon="add" disabled>
          Add to collection
        </RaisedButton>
      </div>
    );
  }
}

export default RaisedButtonComponent;
