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
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// submodules
import { Container, Row, Col } from "../../submodules/uikit/src/UIKit/Modules/GridSystem";
// import PageTitle from "../../submodules/uikit/src/UIKit/Components/Title/PageTitle";
import Block from "../../submodules/uikit/src/UIKit/Elements/Block";

import PageTitle from "../../components/elements/PageTitle";
import Button from "../../components/elements/Button";
import clientConfig from "../../clientConfig";

import s from "./style.less";

class Page extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  };
  render() {
    const blockStyle = {
      padding: 40,
      textAlign: "center",
    };

    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Block style={blockStyle}>
              <PageTitle title="Reset your password" backLink={null} />
              <form
                id="form"
                action={`${clientConfig.parse.parseUrl}apps/${clientConfig.parse
                  .parseAppId}/request_password_reset`}
                method="POST"
              >
                <input
                  name="new_password"
                  type="password"
                  className={s.resetPasswordInput}
                  placeholder="Enter new password"
                />
                <input name="utf-8" type="hidden" value="✓" />
                <input name="username" id="username" type="hidden" value={this.props.username} />
                <input name="token" id="token" type="hidden" value={this.props.token} />
                <Button bsStyle="primary">SUBMIT</Button>
              </form>
            </Block>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withStyles(s)(Page);
