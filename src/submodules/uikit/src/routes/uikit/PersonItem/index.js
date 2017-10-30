import React, { PureComponent } from "react";
import { PersonGridItem, PersonListItem } from "../../../UIKit/Components/PersonItem";

class PersonGridItemComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>PersonItem</h1>
        <br />

        <h3 className="m-b-10">PersonGridItem</h3>
        <div>
          <PersonGridItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
            // put width of item by style or by className
            style={{ width: "16.67%" }}
          />
          <PersonGridItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
            style={{ width: "16.67%" }}
          />
          <PersonGridItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
            style={{ width: "16.67%" }}
          />
          <PersonGridItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
            style={{ width: "16.67%" }}
          />
        </div>

        <br />
        <br />

        <h3 className="m-b-10">PersonListItem</h3>
        <div style={{ width: 300 }}>
          <PersonListItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
          />
          <PersonListItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
          />
          <PersonListItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
          />
          <PersonListItem
            avatarUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            personUrl="#"
            name="This is a name"
          />
        </div>
      </div>
    );
  }
}

export default PersonGridItemComponent;
