/* eslint quotes: ["error", "single"] */

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import ReactDOM from 'react-dom/server';

import { analytics } from '../config';
import { RUNTIME_HTML_META } from '../constants/index';
import { REDUCER_RUNTIME } from '../constants/reducers';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    htmlMeta: PropTypes.object,
    state: PropTypes.object,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    stylesheets: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string.isRequired,
  };
  static defaultProps = {
    styles: [],
    scripts: [],
    stylesheets: [],
    state: null,
    htmlMeta: null,
  };

  render() {
    const { title, styles, scripts, stylesheets, state, children } = this.props;
    const metas = [];
    let htmlMeta = {
      title,
    };

    if (this.props.htmlMeta || (state && state[REDUCER_RUNTIME])) {
      if (this.props.htmlMeta) {
        htmlMeta = this.props.htmlMeta;
      } else {
        htmlMeta = state[REDUCER_RUNTIME][RUNTIME_HTML_META] || {};
      }
      // Fix warning in console: Markup different on the server and the client
      // detail: https://github.com/Hashnode/mern-starter/issues/149
      // const _children = typeof children === 'string' ? children : (<div>{children}</div>);
      // console.log('htmlMeta ', htmlMeta);
      if (htmlMeta.metaName && Object.keys(htmlMeta.metaName).length > 0) {
        const keys = Object.keys(htmlMeta.metaName);
        for (let i = 0; i < keys.length; i++) {
          metas.push(<meta name={keys[i]} content={htmlMeta.metaName[keys[i]]} />);
        }
      }
      if (htmlMeta.metaProperty && Object.keys(htmlMeta.metaProperty).length > 0) {
        const keys = Object.keys(htmlMeta.metaProperty);
        for (let i = 0; i < keys.length; i++) {
          metas.push(<meta property={keys[i]} content={htmlMeta.metaProperty[keys[i]]} />);
        }
      }
      if (htmlMeta.itemProps && Object.keys(htmlMeta.itemProps).length > 0) {
        const keys = Object.keys(htmlMeta.itemProps);
        for (let i = 0; i < keys.length; i++) {
          metas.push(<meta itemProp={keys[i]} content={htmlMeta.itemProps[keys[i]]} />);
        }
      }
    }

    const headDOM = (
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{htmlMeta.title || title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.5" />
        <meta name="propeller" content="0e605860346c5694c499f6e060b141c3" />
        {metas}
        <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/manifest.json" />
        <meta name="msapplication-TileColor" content="#2196f3" />
        <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#2196f3" />
        {styles.map(style => (
          <style
            key={style.id}
            id={style.id}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.cssText }}
          />
        ))}
        {stylesheets &&
          stylesheets.map(stylesheet => (
            <link async defer rel="stylesheet" key={stylesheet} href={stylesheet} />
          ))}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                "@context": "http://schema.org",
                "@type": "WebSite",
                "url": "https://mangarock.com/",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://mangarock.com/search?q={search_keywords}",
                  "query-input": "required name=search_keywords"
                }
              }`,
          }}
        />
      </head>
    );

    let headDOMHtml = ReactDOM.renderToString(headDOM);
    headDOMHtml = headDOMHtml
      .substring(headDOMHtml.indexOf('>') + 1, headDOMHtml.lastIndexOf('</head>'))
      .replace(/&amp;/g, '&');

    return (
      <html className="no-js" lang="en" prefix="og: http://ogp.me/ns#">
        <head dangerouslySetInnerHTML={{ __html: headDOMHtml }} />
        <body>
          {!process.env.BROWSER ? (
            <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          ) : (
            <div id="app">{children} </div>
          )}

          {state && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `window.APP_STATE=${serialize(state, { isJSON: true })}`,
              }}
            />
          )}
          {scripts &&
            scripts.map(script => <script data-cfasync={false} key={script} src={script} />)}
          {analytics.google.trackingId && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')`,
              }}
            />
          )}
          {analytics.google.trackingId && (
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          )}
        </body>
      </html>
    );
  }
}

export default Html;
