import React, { Component } from "react";
import { PageTitle, BlockTitle, ListTitle } from "../../../UIKit/Components/Title";

class TitleComponent extends Component {
  render() {
    return (
      <div>
        <PageTitle actionLink="#" actionName="Action LINK">
          Page Title
        </PageTitle>
        <BlockTitle actionLink="#" actionName="Action LINK">
          Block Title
        </BlockTitle>
        <ListTitle actionLink="#" actionName="Action LINK">
          List Title
        </ListTitle>
        <PageTitle actionName="Action LINK">Page Title with no link</PageTitle>
        <BlockTitle actionName="Action LINK">Block Title with no link</BlockTitle>
        <ListTitle actionName="Action LINK">List Title with no link</ListTitle>
      </div>
    );
  }
}

export default TitleComponent;
