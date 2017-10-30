/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export default {
  path: "/page",
  async action(context) {
    const route = await new Promise(resolve => {
      require.ensure(
        [],
        require => resolve(require("./routes/HomePageRoute").default),
        "homepage",
      );
    });
    const component = await route(context, true);
    const page = (context.query && context.query.page) || "";
    return {
      title: `Page ${page}`,
      chunk: "homepage",
      enableServerSideRender: true,
      component,
    };
  },
};
