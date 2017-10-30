/* eslint
no-unused-expressions: "off",
prefer-destructuring: "off",
react/prop-types: "off",
no-unused-expressions: "off",
jsx-a11y/anchor-is-valid: "off"
*/
import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import classnames from "classnames";

// submodules
import Collapse from "../../../../submodules/uikit/src/UIKit/Components/Collapse";
import ShowMoreButton from "../../../../submodules/uikit/src/UIKit/Elements/ShowMoreButton";
import Link from "../../../../submodules/uikit/src/UIKit/Elements/Link";

import { getObjectUri } from "../../../../helper/utils";

import s from "./GenresList.scss";

class GenresList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    this.state.expanded !== nextState.expanded ||
    this.props.activeGenre !== nextProps.activeGenre;

  onToggle = () => this.setState({ expanded: !this.state.expanded });

  handleLinkClick = oid => {
    this.props.onGenreItemClick ? this.props.onGenreItemClick(oid) : "";
    this.forceUpdate();
  };

  render() {
    const { items, onGenreItemClick = () => {} } = this.props;
    if (!items) return null;

    const isCollapse = this.props.isCollapse;
    const shownNumber = 8; // should be even number
    const shownItems = items.slice(0, shownNumber);
    const hiddenItems = items.slice(shownNumber);
    const hasHiddenItems = hiddenItems && hiddenItems.length > 0;

    // Use for homepage
    let list = (
      <div className={s.root}>
        {shownItems.map(({ name, oid }) => (
          <Link
            key={oid}
            className={s.item}
            to={getObjectUri({ oid })}
            onClick={() => onGenreItemClick(oid)}
          >
            {name}
          </Link>
        ))}
        {hasHiddenItems && (
          <div>
            <Collapse expanded={this.state.expanded}>
              {hiddenItems.map(({ name, oid }) => (
                <Link
                  key={oid}
                  className={s.item}
                  to={getObjectUri({ oid })}
                  onClick={() => onGenreItemClick(oid)}
                >
                  {name}
                </Link>
              ))}
            </Collapse>
            <ShowMoreButton
              opened={this.state.expanded}
              onClick={this.onToggle}
            >
              {!this.state.expanded ? "SHOW MORE" : "SHOW LESS"}
            </ShowMoreButton>
          </div>
        )}
      </div>
    );
    // Use for Genre detail page
    if (!isCollapse) {
      list = (
        <div className={s.root}>
          <div>
            {items.map(({ name, oid }) => {
              let linkStyleWhenClick = {};
              if (this.props.activeGenre === oid) {
                linkStyleWhenClick = {
                  color: "#28b5f5",
                };
              }

              return (
                <Link
                  key={oid}
                  className={s.item}
                  to={getObjectUri({ oid })}
                  style={linkStyleWhenClick}
                  onClick={() => this.handleLinkClick(oid)}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      );
    }

    return list;
  }
}

GenresList.propTypes = {
  items: PropTypes.array,
  isCollapse: PropTypes.bool,
  activeGenre: PropTypes.string,
};

GenresList.defaultProps = {
  items: [],
  activeGenre: "",
  isCollapse: true,
};

export default withStyles(s)(GenresList);
