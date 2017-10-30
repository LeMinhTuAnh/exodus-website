import React, { PureComponent } from "react";
import PopulatingView from "../../../UIKit/Components/PopulatingView";

class PopulatingViewComponent extends PureComponent {
  render() {
    return (
      <div style={{ width: 600 }}>
        <h1>PopulatingView</h1>
        <br />
        <h3 className="m-b-10">Normal Theme</h3>
        <PopulatingView
          imageUrl="https://thenewboston.com/images/forum/logos/145efe2aab7ca9959397d6344180b658.png"
          title="Lorem ipsum dolor."
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugiat quod repudiandae, sequi unde dolor. At velit quae, culpa cum!"
          actionName="Action Now"
        />
        <br />
        <hr />
        <br />
        <h3 className="m-b-10">Dark Theme</h3>
        <div style={{ background: "black" }}>
          <PopulatingView
            imageUrl="https://thenewboston.com/images/forum/logos/145efe2aab7ca9959397d6344180b658.png"
            title="Lorem ipsum dolor."
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugiat quod repudiandae, sequi unde dolor. At velit quae, culpa cum!"
            actionName="Action Now"
            theme="dark"
          />
        </div>
      </div>
    );
  }
}

export default PopulatingViewComponent;
