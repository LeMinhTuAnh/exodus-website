/* eslint quotes: ["error", "single"] */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/* eslint
  max-len: "off"
*/

import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom/server';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import routes from './routes';
import configureStore from './store/configureStore';
// import { setRuntimeVariable } from './actions/runtime';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import { port, host } from './config';
import { setHost } from './clientConfig';
import { getGenreListItems } from './server/api/genre';
import { getCountryNameFromRequest } from './server/helper/countryHelper';
import { RUNTIME_HTML_META } from './constants/index';

const app = express();

const buildTime = new Date().getTime();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

setHost(host);
// console.log('ENV', process.env);
//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxage: '1y',
  }),
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------

if (__DEV__) {
  app.enable('trust proxy');
}

// middleware for user authentication
const authHelpers = require('./server/helper/authHelper'); // temp - new
// import * as authHelper from './server/helper/authHelper' // temp - old
app.use(authHelpers.authMiddleware);

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/ajax/login', require('./server/api/login').default);
app.use('/ajax/home', require('./server/api/home').default);
app.use('/ajax/genre', require('./server/api/genre').default);

app.use('/ajax/account', require('./server/api/account').default);
app.use('/ajax/upload', require('./server/api/upload').default);
app.use('/ajax/share', require('./server/api/share').default);
app.use('/ajax/release', require('./server/api/release').default);

app.use('/sitemap', require('./server/api/sitemap').default);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    const store = configureStore(
      {
        // user: { user: req.user } || null,
        // user: req.user || {},
        user: { user: req.user } || {},
        meta: { data: {} },
        genre: await getGenreListItems(),
        runtime: {
          host,
          initialNow: Date.now(),
          country: getCountryNameFromRequest(req),
          [RUNTIME_HTML_META]: {},
        },
      },
      {
        cookie: req.headers.cookie,
        request: req,
      },
    );

    const css = new Set();

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      // Initialize a new Redux store
      // http://redux.js.org/docs/basics/UsageWithReact.html
      store,
      // Navigation manager, e.g. history.push('/home')
      // https://github.com/mjackson/history
      // history,
      path: req.path,
      query: req.query,
    };

    const route = await UniversalRouter.resolve(routes, {
      ...context,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.state = context.store.getState();
    if (
      process.env.SERVER_RENDERING &&
      (route.enableServerSideRender === true ||
        route.enableServerSideRender === 'true')
    ) {
      // console.log('server rendering ', req.header('Cf-Ipcountry'), req.header('user-agent'), req.path);
      data.children = ReactDOM.renderToString(
        <App context={context}>
          {route.component}
        </App>,
      );
    } else {
      data.children = '';
    }
    data.state = context.store.getState();
    data.styles = [{ id: 'css', cssText: [...css].join('') }];
    data.scripts = [
      '/javascript/material130.min.js',
      assets.vendor.js,
      'https://cdn.branch.io/branch-latest.min.js',
      assets.client.js,
    ];
    if (assets[route.chunk]) {
      data.scripts.push(assets[route.chunk].js);
    }

    if (
      req.headers &&
      req.headers.accept &&
      req.headers.accept.indexOf('image/webp') === -1
    ) {
      const userAgent = req.headers['user-agent'];
      if (userAgent && userAgent.indexOf('Trident') > 0) {
        data.scripts.push(`/javascript/mr_ie.js?${buildTime}`);
      } else {
        data.scripts.push(`/javascript/mr.js?${buildTime}`);
      }
    }

    data.stylesheets = [
      'https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto:300,300i,400,400i,500&amp;subset=latin-ext,vietnamese',
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      // `/css/styles.min.css?${buildTime}`,
    ];

    const serverPush = [];
    for (let i = 0; i < data.stylesheets.length; i++) {
      const stylesheet = data.stylesheets[i];
      if (stylesheet[0] !== '/') {
        continue;
      }
      serverPush.push(`<${stylesheet}>; rel=preload; as=style;`);
    }
    for (let i = 0; i < data.scripts.length; i++) {
      const script = data.scripts[i];
      if (script[0] !== '/') {
        continue;
      }
      serverPush.push(`<${script}>; rel=preload; as=script;`);
    }
    if (serverPush.length > 0) {
      res.header('Link', serverPush);
    }

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res) => {
  // eslint-disable-line no-unused-vars
  // console.log(pe.render(err)); // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
// let _port = port;
// process.argv.forEach(function (val, index) {
//   if (val.indexOf("--port=") >= 0) {
//     _port = parseInt(val.replace("--port=",""));
//   }
//   console.log(index + ': ' + val);
// });

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
/* eslint-enable no-console */
