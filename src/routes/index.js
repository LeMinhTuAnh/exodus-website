/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */
import { injectAsyncReducer } from "../store/configureStore";

import { openGetAppBar, getDeepLink } from "../actions/runtime";

// The top-level (parent) route
export default {
  path: "/",

  // Keep in mind, routes are evaluated in order
  children: [
    require("./home").default,
    require("./page").default,
    // require("./contact").default,
    // require("./register").default,
    // require("./admin").default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require("./static").default,
    require("./notFound").default,
  ],

  async action({ next, store }) {
    // injectAsyncReducer(store, require("./search/reducers/quickSearchReducer"));
    injectAsyncReducer(store, require("../reducers/meta"));
    injectAsyncReducer(store, require("../reducers/user"));

    // injectAsyncReducer(store, require("./account/reducers/loginReducer"));
    // OPEN GET APP BAR
    const { dispatch } = store;
    if (process.env.BROWSER) {
      dispatch(openGetAppBar());
      // HIDE GET APP BAR IF ROUTE HAVE NO DEEPLINK
      dispatch(getDeepLink(""));
    }
    // Execute each child route until one of them return the result
    let route = {
      title: "Comspace",
      component: null,
      enableServerSideRender: false,
    };
    if (process.env.BROWSER || process.env.SERVER_RENDERING) {
      route = await next();

      // Provide default values for title, description etc.
      route.title = `${route.title || "Untitled Page"}`;
      route.description = route.description || "";
    }

    return route;
  },
};
