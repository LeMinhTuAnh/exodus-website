import React, { PureComponent } from "react";
import SearchBox from "../../../UIKit/Components/SearchBox";

class CollectionListItemComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>SearchBox</h1>
        <br />
        <div>Size medium</div>
        <SearchBox style={{ width: 500 }} placeHolder="Lorem ipsum dolor." />
        <br />
        <br />
        <SearchBox placeHolder="Lorem ipsum." hasButton />
        <br />
        <br />
        <SearchBox style={{ width: "50%" }} placeHolder="Lorem ipsum dolor sit." />
        <br />
        <br />
        <SearchBox style={{ width: 500 }} placeHolder="Lorem ipsum dolor sit amet." hasButton />
        <br />
        <br />
        <div>Size small</div>
        <SearchBox size="small" style={{ width: "50%" }} placeHolder="Lorem ipsum dolor sit." />
        <br />
        <br />
        <SearchBox
          size="small"
          style={{ width: 500 }}
          placeHolder="Lorem ipsum dolor sit amet."
          hasButton
        />
        <br />
        <br />
        <div>Size big</div>
        <SearchBox size="large" style={{ width: "50%" }} placeHolder="Lorem ipsum dolor sit." />
        <br />
        <br />
        <SearchBox
          size="large"
          style={{ width: 500 }}
          placeHolder="Lorem ipsum dolor sit amet."
          hasButton
        />
        <br />
        <br />
        <div>Disabled state</div>
        <SearchBox
          disabled
          size="large"
          style={{ width: "50%" }}
          placeHolder="Lorem ipsum dolor sit."
        />
        <br />
        <br />
        <div>Dark</div>
        <SearchBox
          dark
          size="large"
          style={{ width: "50%" }}
          placeHolder="Lorem ipsum dolor sit."
        />
        <br />
        <br />
        <SearchBox
          dark
          disabled
          size="large"
          style={{ width: "50%" }}
          placeHolder="Lorem ipsum dolor sit."
        />
      </div>
    );
  }
}

export default CollectionListItemComponent;
