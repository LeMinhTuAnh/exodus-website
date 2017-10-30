/* eslint
  css-modules/no-unused-class: "off"
*/

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import GridItem from "./GridItem";
import Loading from "../elements/Loading";

import s from "./MangaGrid.scss";

class MangaGrid extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    small: PropTypes.bool,
    isLoading: PropTypes.bool,
    meta: PropTypes.object.isRequired,
    showAll: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
    small: false,
    isLoading: false,
    showAll: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      itemPerColumn: 0,
    };
  }

  componentDidMount = () => {
    if (process.env.BROWSER && typeof window !== "undefined") {
      window.addEventListener("resize", this.calculateItemPerRows);
    }
    this.calculateItemPerRows();
  };

  componentWillUnmount = () => {
    if (process.env.BROWSER && typeof window !== "undefined") {
      window.removeEventListener("resize", this.calculateItemPerRows);
    }
  };

  container = null;
  gridItem = null;

  calculateItemPerRows = () => {
    if (!process.env.BROWSER || !this.container || !this.gridItem || !this.gridItem.nextSibling) {
      return;
    }

    const containerWidth = this.container.getBoundingClientRect().width;
    const itemWidth =
      this.gridItem.nextSibling.getBoundingClientRect().left -
      this.gridItem.getBoundingClientRect().left;
    const itemPerColumn = Math.floor(containerWidth / itemWidth);

    if (this.state.itemPerColumn !== itemPerColumn) {
      this.setState({ itemPerColumn });
    }
  };

  saveGridItem = dom => {
    const needCalculate = this.gridItem === null;
    this.gridItem = dom;
    if (needCalculate) {
      this.calculateItemPerRows();
    }
  };
  saveContainer = dom => {
    const needCalculate = this.container === null;
    this.container = dom;
    if (needCalculate) {
      this.calculateItemPerRows();
    }
  };

  render() {
    const { items, small, showAll } = this.props; // eslint-disable-line
    const meta = this.props.meta;
    const itemPerColumn = this.state.itemPerColumn;
    if (!items || !meta) return null;

    let maxItems = items.length;
    if (!showAll && itemPerColumn !== 0) {
      maxItems = Math.floor(items.length / itemPerColumn) * itemPerColumn;
    }

    return (
      <div
        itemScope
        itemType="http://schema.org/ItemList"
        ref={this.saveContainer}
        className={classnames(s.mangaGrid, small && s.smallGrid)}
      >
        {this.props.isLoading
          ? <Loading />
          : items.map((itemOID, idx) => {
            if (!meta[itemOID] || idx >= maxItems) {
              return null;
            }
            const item = meta[itemOID];
            const authors = {};
            if (item.author_ids && item.author_ids.length > 0) {
              for (let i = 0; i < item.author_ids.length; i++) {
                const authorID = item.author_ids[i];
                if (!meta[authorID]) {
                  continue;
                }
                authors[authorID] = meta[authorID];
              }
            }
            if (idx === 0) {
              return (
                <GridItem
                  refFunc={this.saveGridItem}
                  key={item.oid}
                  series={item}
                  authors={Object.values(authors)}
                />
              );
            }
            return <GridItem key={item.oid} series={item} authors={Object.values(authors)} />;
          })}
      </div>
    );
  }
}

export default withStyles(s)(MangaGrid);
