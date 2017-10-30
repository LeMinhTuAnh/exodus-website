import React, { PureComponent } from "react";
import { Container, Row, Col } from "../../../UIKit/Modules/GridSystem";

const styleOne = {
  backgroundColor: "green",
  border: "1px solid blue",
};

const styleTwo = {
  backgroundColor: "red",
  border: "1px solid blue",
};

class GridSystemModule extends PureComponent {
  render() {
    return (
      <div>
        <h1>GridSystem</h1>
        <hr />
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3} style={styleOne}>
              <h3>xs=12, md=6, lg=3</h3>
            </Col>
            <Col xs={12} md={6} lg={3} style={styleOne}>
              <h3>xs=12, md=6, lg=3</h3>
            </Col>
            <Col xs={12} md={6} lg={3} style={styleOne}>
              <h3>xs=12, md=6, lg=3</h3>
            </Col>
            <Col xs={12} md={6} lg={3} style={styleOne}>
              <h3>xs=12, md=6, lg=3</h3>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col lg={6} xs={12} style={styleTwo}>
              lg=6, xs=12
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row class="justify-content-center">
            <Col className="mr-auto ml-auto" md={4} xs={12} style={styleTwo}>
              md=4, xs=12, className=`mr-auto ml-auto`
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

export default GridSystemModule;
