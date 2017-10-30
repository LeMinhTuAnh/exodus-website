import React, { PureComponent } from "react";
import Link from "../../../UIKit/Elements/Link";

class LinkComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Link Text</h1>
        <br />
        <br />
        <Link to="#">
          <h1>This is a h1 Link</h1>
        </Link>
      </div>
    );
  }
}

export default LinkComponent;
