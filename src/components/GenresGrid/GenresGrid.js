/* eslint
jsx-a11y/anchor-is-valid: "off"
*/
import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Link from "../../submodules/uikit/src/UIKit/Elements/Link";
import Row from "../../submodules/uikit/src/UIKit/Modules/GridSystem/Row";
import Col from "../../submodules/uikit/src/UIKit/Modules/GridSystem/Col";

import s from "./GenresGrid.scss";

import { getObjectUri } from "../../helper/utils";

import { genre } from "../../propTypes";

class GenresGrid extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(genre),
    onGenreItemClick: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    onGenreItemClick: () => {},
  };

  render() {
    const { items } = this.props;
    if (!items) return null;

    return (
      <Row>
        {items.map(({ name, oid }) => (
          <Col lg={2} md={3} xs={6} key={oid}>
            <Link
              to={getObjectUri({ oid })}
              className={s.item}
              onClick={() => this.props.onGenreItemClick(oid)}
            >
              {name}
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}

export default withStyles(s)(GenresGrid);
