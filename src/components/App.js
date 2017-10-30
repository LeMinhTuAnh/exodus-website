/* eslint quotes: ["error", "single"] */

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

// import Layout from '../submodules/uikit/src/UIKit/Layout';
import Layout from './Layout';

// Trick for reducing trunk size
import Buffer from "buffer"; // eslint-disable-line

import history from '../core/history';

// ---- bootstrap config ----
// import bt from './resources/less/style.keepOriginalLess';
// ---- end bootstrap config ----

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
  history: PropTypes.object,
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  static childContextTypes = ContextType;

  getChildContext = () => {
    this.props.context.history = history;
    return this.props.context;
  };

  // ---- bootstrap config ----
  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss();
    // this.removeBootstrap = insertCss(bt);
  }
  componentWillUnmount() {
    this.removeCss();
    // this.removeBootstrap();
  }
  // ---- end bootstrap config ----

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.

    return (
      <div id={'app-layout-container'}>
        <Layout className={this.props.className}>
          {Children.only(this.props.children)}
        </Layout>
      </div>
    );
  }
}

export default App;
