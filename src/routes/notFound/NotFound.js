import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// submodules
import { Container, Row, Col } from "../../submodules/uikit/src/UIKit/Modules/GridSystem";
import PageTitle from "../../submodules/uikit/src/UIKit/Components/Title/PageTitle";
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";

import s from "./NotFound.scss";

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={s.content}>
                <div className={s.code}>404</div>
                <PageTitle className={s.PageTitle}>
                  {this.props.title}
                </PageTitle>
                <p className={s.msg}>
                  Why don{"'"}t you try to vistit our <Link to={"/"}>Manga Rock Homepage</Link>{" "}
                  instead.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(NotFound);
