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
import PageTitle from "../../submodules/uikit/src/UIKit/Components/Title/PageTitle";
import Block from "../../submodules/uikit/src/UIKit/Elements/Block";

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Block>
              <PageTitle>
                {this.props.title}
              </PageTitle>
              {this.props.children}
            </Block>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withStyles()(NotFound);
