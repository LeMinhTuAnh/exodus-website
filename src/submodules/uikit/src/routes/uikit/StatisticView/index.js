import React, { PureComponent } from "react";
import StatisticView from "../../../UIKit/Elements/StatisticView";

class StatisticViewComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Statistic View</h1>
        <br />
        <br />
        <h4>Normal:</h4>
        <br />
        <StatisticView iconName="credit_card" textContent="Credit Card Available" />
        <br />
        <br />
        <h4>Long text that be truncated:</h4>
        <br />
        <StatisticView
          iconName="explore"
          textContent="Very long text content very long very long"
        />
        <br />
        <br />
        <h4>Customized textColor &amp; iconColor:</h4>
        <br />
        <StatisticView iconName="event" textContent="Primary color icon" iconColor="primary" />
        <br />
        <br />
        <StatisticView iconName="pan_tool" textContent="Warning text color" textColor="warning" />
        <br />
        <br />
        <StatisticView
          iconName="line_style"
          textContent="Primary text, Danger icon"
          textColor="primary"
          iconColor="danger"
        />
      </div>
    );
  }
}

export default StatisticViewComponent;
