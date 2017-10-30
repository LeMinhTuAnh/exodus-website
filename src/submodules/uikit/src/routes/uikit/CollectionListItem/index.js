import React, { PureComponent } from "react";
import { CollectionListItem } from "../../../UIKit/Components/CollectionItem";

class CollectionListItemComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>CollectionListItem</h1>
        <br />

        <h3 className="m-b-10">With background color</h3>
        <div style={{ width: 600 }}>
          <CollectionListItem
            bannerUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            title="Collection title with long text and break to 2 lines"
            collectionUrl="#"
            totalManga="14"
            dateCreated="April 20, 2017"
          />
        </div>
        <br />

        <h3 className="m-b-10">No background color</h3>
        <div style={{ width: 600 }}>
          <CollectionListItem
            bannerUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            title="Collection title with long text and break to 2 lines"
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

export default CollectionListItemComponent;

// bannerUrl,
// title,
// subtitle,
// collectionUrl,
// totalManga,
// dateCreated,
