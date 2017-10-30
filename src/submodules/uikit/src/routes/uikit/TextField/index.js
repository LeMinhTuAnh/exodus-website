import React, { Component } from "react";
import TextField from "../../../UIKit/Elements/TextField";

class TitleComponent extends Component {
  render() {
    return (
      <div>
        <h1>Text Field</h1>
        <br />
        <br />
        <h4>Normal:</h4>
        <TextField onChange={() => {}} label="Hint text..." />
        <br />
        <br />
        <h4>Floating label:</h4>
        <TextField onChange={() => {}} label="Text..." floatingLabel />
        <br />
        <br />
        <h4>Number field with error text:</h4>
        <p>(try to input +/- to see error text)</p>
        <TextField
          onChange={() => {}}
          type="number"
          error="Input is not a number!"
          label="Input a number"
          floatingLabel
        />
        <br />
        <br />
        <h4>Password field:</h4>
        <TextField onChange={() => {}} label="Password..." floatingLabel type="password" />
        <br />
        <br />
        <h4>Email field:</h4>
        <TextField
          onChange={() => {}}
          label="Enter your email..."
          error="Not a valid email"
          type="email"
          floatingLabel
        />
        <br />
        <br />
        <h4>Disabled:</h4>
        <TextField disabled onChange={() => {}} label="Text..." />
        <div />
      </div>
    );
  }
}

export default TitleComponent;
