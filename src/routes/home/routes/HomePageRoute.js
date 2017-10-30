/* eslint
  max-len: "off"
*/
import React from "react";

import { injectAsyncReducer } from "../../../store/configureStore";

import {
  initFetchAction,
  // prepareSocialMeta
} from "../../../helper/utils";

import {
  // requestBanners,
  // requestHotMangaUpdate,
  requestTopPopular,
  requestReadRightNow,
  requestHomeLatestUpdates,
  requestHomeHotUpdates,
} from "../actions";

// import { RUNTIME_HTML_META } from "../../../constants";
import {
  // setRuntimeVariable,
  getDeepLink,
} from "../../../actions/runtime";

import HomePage from "../containers/HomePage";

export default async function HomePageRoute(context, serverRendering = false) {
  if (!process.env.BROWSER && !serverRendering) {
    return <div />;
  }

  injectAsyncReducer(context.store, require("../reducers/homeReducer.js"));
  // injectAsyncReducer(context.store, require("../../manga/reducers/latestUpdateReducer"));

  const { dispatch } = context.store;

  // dispatch(
  //   setRuntimeVariable({
  //     name: RUNTIME_HTML_META,
  //     value: prepareSocialMeta({
  //       title: "Manga Rock - Online Manga Reader",
  //       description:
  //         "The best place to read the latest & greatest manga for FREE! " +
  //         "From the makers of the popular Manga Rock app, we aim to provide the best-quality manga " +
  //         "& be the first one to publish new chapters. Enjoy!",
  //       bigImage: "/images/homeshare.jpg",
  //       site: "/",
  //       androidLink: "rofmr://",
  //       iosLink: "rofmr://",
  //     }),
  //   }),
  // );

  const actions = [];

  actions.push(callback => dispatch(requestHomeLatestUpdates(callback)));
  actions.push(callback => dispatch(requestHomeHotUpdates(callback)));

  if (process.env.BROWSER) {
    injectAsyncReducer(
      context.store,
      require("../reducers/readRightNowReducer"),
    );
    injectAsyncReducer(context.store, require("../reducers/topPopularReducer"));
    // actions.push(callback => dispatch(requestHotMangaUpdate(callback)));
    actions.push(callback => dispatch(requestReadRightNow(callback)));
    actions.push(callback => dispatch(requestTopPopular(callback)));
    actions.push(() => dispatch(getDeepLink("latestUpdate")));
  }

  await initFetchAction(context, actions, true);

  return <HomePage />;
}
