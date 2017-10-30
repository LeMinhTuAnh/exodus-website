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
      <SimplePage title="Disclamer">
        <p>
          All manga, characters and logos belong to their respective copyrights owners. <br />
          Manga Rock is developed by Not A Basement Studio and does not have any affliation with the content providers. We reserve the right to change the source of manga without prior notice.
        </p>
      </SimplePage>
    );
  }
}

export default Page;
