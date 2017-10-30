import React, { PureComponent } from "react";
import { CollectionGridItem } from "../../../UIKit/Components/CollectionItem";

class CollectionGridItemComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>CollectionGridItem</h1>
        <br />

        <h2 className="m-b-10">With background color</h2>
        <div style={{ width: 500 }}>
          <CollectionGridItem
            bannerUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            title="Collection title with long text and break to 2 lines"
            subtitle="Fiery blood-rushing action delivered in spectacular visual, these manga are not as well-known as..."
            collectionUrl="#"
            totalManga="14"
            dateCreated="April 20, 2017"
          />
        </div>
        <br />

        <h2 className="m-b-10">No background color</h2>
        <div style={{ width: 500 }}>
          <CollectionGridItem
            bannerUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            title="Collection title with long text and break to 2 lines"
            subtitle="Fiery blood-rushing action delivered in spectacular visual, these manga are not as well-known as..."
            collectionUrl="#"
            totalManga="14"
            dateCreated="April 20, 2017"
            noBackground
          />
        </div>
      </div>
    );
  }
}

export default CollectionGridItemComponent;
