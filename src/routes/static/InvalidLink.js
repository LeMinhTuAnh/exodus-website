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
import withStyles from "isomorphic-style-loader/lib/withStyles";
import PageTitle from "../../components/elements/PageTitle";

// submodules
import { Container, Row, Col } from "../../submodules/uikit/src/UIKit/Modules/GridSystem";
import Block from "../../submodules/uikit/src/UIKit/Elements/Block";
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";

import s from "./style.less";

class Page extends React.Component {
  render() {
    const blockStyle = {
      padding: 40,
      textAlign: "center",
    };

    const linkStyle = {
      color: "#28b5f5",
    };

    return (
      <div className={s.simplePage}>
        <Container>
          <Row>
            <Col xs={12}>
              <Block style={blockStyle}>
                <PageTitle title="Invalid Link" backLink={null} />
                <p>
                  Please go back to{" "}
                  <Link style={linkStyle} to="/">
                    Manga Rock Homepage
                  </Link>{" "}
                  and try again.
                </p>
              </Block>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Page);
