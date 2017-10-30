import React, { PureComponent } from "react";
import Block from "../../../UIKit/Elements/Block";

class BlockComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>Block</h1>
        <br />
        <br />
        <h4>Default Block:</h4>
        <br />
        <Block>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at erat tellus. Sed ut
            mi sit amet libero dignissim finibus. Fusce pharetra risus a purus lacinia, eu feugiat
            felis ultricies. In vitae nulla molestie, malesuada diam vel, blandit purus. Sed mollis
            odio eget enim bibendum aliquet. Curabitur imperdiet, neque quis volutpat mollis, lacus
            neque finibus odio, quis luctus ex mi quis lectus. Morbi faucibus, lacus ac ultrices
            tincidunt, turpis leo tempor ipsum, nec pellentesque lorem purus eget lorem. Vivamus
            cursus dui eu metus lacinia dignissim in convallis ligula.
          </div>
        </Block>
        <br />
        <br />
        <h4>Block with noBackground:</h4>
        <br />
        <Block noBackground>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at erat tellus. Sed ut
            mi sit amet libero dignissim finibus. Fusce pharetra risus a purus lacinia, eu feugiat
            felis ultricies. In vitae nulla molestie, malesuada diam vel, blandit purus. Sed mollis
            odio eget enim bibendum aliquet. Curabitur imperdiet, neque quis volutpat mollis, lacus
            neque finibus odio, quis luctus ex mi quis lectus. Morbi faucibus, lacus ac ultrices
            tincidunt, turpis leo tempor ipsum, nec pellentesque lorem purus eget lorem. Vivamus
            cursus dui eu metus lacinia dignissim in convallis ligula.
          </div>
        </Block>
        <br />
        <br />
        <h4>Block with noBackground &amp; noPadding:</h4>
        <br />
        <Block noBackground noPadding>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at erat tellus. Sed ut
            mi sit amet libero dignissim finibus. Fusce pharetra risus a purus lacinia, eu feugiat
            felis ultricies. In vitae nulla molestie, malesuada diam vel, blandit purus. Sed mollis
            odio eget enim bibendum aliquet. Curabitur imperdiet, neque quis volutpat mollis, lacus
            neque finibus odio, quis luctus ex mi quis lectus. Morbi faucibus, lacus ac ultrices
            tincidunt, turpis leo tempor ipsum, nec pellentesque lorem purus eget lorem. Vivamus
            cursus dui eu metus lacinia dignissim in convallis ligula.
          </div>
        </Block>
      </div>
    );
  }
}

export default BlockComponent;
