import React, { PureComponent } from "react";
import NotificationBadge from "../../../UIKit/Elements/NotificationBadge";

class NotificationBadgeComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>NotificationBagde</h1>
        <br />

        <h4>
          NotificationBadge badgeNumber={3}
        </h4>
        <NotificationBadge badgeNumber={3} />
        <br />
        <br />

        <h4>New NotificationBadge</h4>
        <NotificationBadge />
      </div>
    );
  }
}

export default NotificationBadgeComponent;
