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

// submodules
import { Container, Row, Col } from "../../submodules/uikit/src/UIKit/Modules/GridSystem";
// import PageTitle from "../../submodules/uikit/src/UIKit/Components/Title/PageTitle";
import Block from "../../submodules/uikit/src/UIKit/Elements/Block";

import PageTitle from "../../components/elements/PageTitle";

import s from "./style.less";

class Page extends React.Component {
  render() {
    const blockStyle = {
      padding: 40,
      textAlign: "center",
    };

    const imgStyle = {
      marginBottom: 20,
    };

    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Block style={blockStyle}>
              <img style={imgStyle} src="/svg/successful.svg" alt="successful" />
              <PageTitle title="Successfully verified your email" backLink={null} />
            </Block>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withStyles(s)(Page);
