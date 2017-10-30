import React, { PureComponent } from "react";
import Tooltip from "../../../UIKit/Elements/Tooltip";

class TooltipComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Tooltips</h1>
        <br />
        <br />
        <h4>Default (bottom position):</h4>
        <br />
        <Tooltip label="Text Content">Hover Me</Tooltip>
        <br />
        <br />
        <h4>Left position:</h4>
        <br />
        <Tooltip position="left" label="Text Content">
          Hover Me
        </Tooltip>
        <br />
        <br />
        <h4>Right position:</h4>
        <br />
        <Tooltip position="right" label="Text Content">
          Hover Me
        </Tooltip>
        <br />
        <br />
        <h4>Top position:</h4>
        <br />
        <Tooltip position="top" label="Text Content">
          Hover Me
        </Tooltip>
        <br />
        <br />
        <h4>With long content:</h4>
        <br />
        <Tooltip
          position="top"
          label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sunt!"
        >
          Hover Me
        </Tooltip>
      </div>
    );
  }
}

export default TooltipComponent;
