/* eslint max-len: "off" */
/* eslint react/no-unescaped-entities: "off" */

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
// import PageTitle from "../../components/elements/PageTitle";
// import Link from "../../components/elements/Link";
// import withStyles from "isomorphic-style-loader/lib/withStyles";
// import s from "./style.less";

import SimplePage from "./SimplePage";

class Page extends React.Component {
  render() {
    return (
      <SimplePage title="About Us">
        <p>
          One word to describe us: Passion. We’re passionate about making awesome apps. We believe that apps can be more than 5-minute stress reliefs - they can make your life better. To do so, we follow our one and only rule - only to make what we would use ourselves. We don’t accept mediocrity, and neither should our customers. To date, our apps have been awarded “New and Noteworthy” and “Best apps of 2012” by Apple.
        </p>
        <p>
          Visit us @<a target="_blank" rel="noopener noreferrer" href="http://www.notabasement.com">www.notabasement.com</a>
        </p>
      </SimplePage>
    );
  }
}

export default Page;
