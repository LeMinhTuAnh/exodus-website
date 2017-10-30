import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import createHelpers from "./createHelpers";
import createLogger from "./logger";

import { callAPIMiddleware } from "../core/middleware/callAPIMiddleware";

const customMiddlewares = [];

function getReducersFromInitialState(initialState) {
  const reducers = {};
  const defaultReducer = (state = {}) => state;
  Object.keys(initialState).forEach(key => {
    reducers[key] = defaultReducer;
  });
  Object.keys(rootReducer).forEach(key => {
    reducers[key] = rootReducer[key];
  });
  return reducers;
}

export default function configureStore(initialState, helpersConfig) {
  const helpers = createHelpers(helpersConfig);
  const middleware = [thunk.withExtraArgument(helpers)];

  let enhancer;

  const apiMiddleware = callAPIMiddleware(helpersConfig.request);
  middleware.push(apiMiddleware);
  if (customMiddlewares && customMiddlewares.length > 0) {
    middleware.push(...customMiddlewares);
  }

  if (__DEV__) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  // const store = createStore(rootReducer, initialState, enhancer);
  const reducers = getReducersFromInitialState(initialState);
  const store = createStore(
    combineReducers(reducers),
    initialState,
    enhancer,
  );

  store.reducers = reducers;
  store.injectedReducers = {};

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (__DEV__ && module.hot) {
    module.hot.accept("../reducers", () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require("../reducers").default),
    );
  }

  return store;
}

export function injectMiddleware(middlewareCallback) {
  customMiddlewares.push(middlewareCallback);
}

export function injectAsyncReducer(store, name, asyncReducer) {
  let reducerName = name;
  let reducer = asyncReducer;
  if (typeof name === "object" && !asyncReducer) {
    reducerName = name.REDUCER_NAME;
    reducer = name.default;
  }

  if (store.injectedReducers[reducerName]) {
    return;
  }

  store.reducers[reducerName] = reducer; /* eslint no-param-reassign: "off"*/
  store.injectedReducers[reducerName] = true; /* eslint no-param-reassign: "off"*/

  store.replaceReducer(combineReducers(store.reducers));
}
