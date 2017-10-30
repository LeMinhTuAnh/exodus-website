import React, { PureComponent } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Typography.scss";

class Typography extends PureComponent {
  render() {
    return (
      <div>
        <h1>Typography</h1>
        <br />
        <br />
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4 className={s.headline}>Headline</h4>
        <p className={s.bodyText}>Body text</p>
        <p className={s.smallBodyText}>Small Body text</p>
        <p className={s.subText}>Sub text</p>
      </div>
    );
  }
}

export default withStyles(s)(Typography);
