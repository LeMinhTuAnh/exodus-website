import React, { Component } from "react";

// submodules
import { Container, Row, Col } from "../../../submodules/uikit/src/UIKit/Modules/GridSystem";
import Loading from "../../../submodules/uikit/src/UIKit/Elements/Loading";
import Block from "../../../submodules/uikit/src/UIKit/Elements/Block";

class BlockLoading extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col {...this.props}>
            <Block
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 30,
                paddingBottom: 30,
              }}
            >
              <Loading />
            </Block>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlockLoading;
