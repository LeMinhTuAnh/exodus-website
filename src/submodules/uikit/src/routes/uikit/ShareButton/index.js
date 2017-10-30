import React, { PureComponent } from "react";
import ShareButton from "../../../UIKit/Elements/ShareButton";

class ShareButtonComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Share Button</h1>
        <br />
        <br />
        <h4>Facebook:</h4>
        <br />
        <ShareButton shareCount={0} />
        <br />
        <ShareButton shareCount={2} />
        <br />
        <br />
        <h4>Twitter:</h4>
        <br />
        <ShareButton twitter shareCount={0} />
        <br />
        <ShareButton twitter shareCount={2000} />
      </div>
    );
  }
}

export default ShareButtonComponent;
