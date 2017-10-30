/* eslint
  react/no-array-index-key: "off"
*/
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// submodule
import PersonGridItem from "../../submodules/uikit/src/UIKit/Components/PersonItem/PersonGridItem";
import Loading from "../../submodules/uikit/src/UIKit/Elements/Loading";

import style from "./WikiGrid.scss";

class WikiGrid extends React.Component {
  static propTypes = {
    countText: PropTypes.string,
    showFilter: PropTypes.bool,
    onFilter: PropTypes.func,
    small: PropTypes.bool,
    big: PropTypes.bool,
    loading: PropTypes.bool,
    maxItem: PropTypes.number,
    items: PropTypes.array,
    filter: PropTypes.array,
  };

  static defaultProps = {
    countText: "",
    items: [],
    total: 0,
    showFilter: true,
    small: false,
    big: false,
    maxItem: 0,
    loading: false,
    onFilter: null,
    filter: [],
  };

  onFilterChange = event => {
    event.preventDefault();
    if (this.props.onFilter) {
      this.props.onFilter(event.target.value);
    }
  };

  render() {
    const { items, showFilter, maxItem, small, big } = this.props;
    if (!items) return null;

    const existed = {};
    let count = 0;
    return (
      <div className={cn(style.wikiGrid, small && style.small)}>
        {showFilter && (
          // top bar
          <div className={style.toolbar}>
            {this.props.countText ? (
              // couting
              <div className={style.counting}>{this.props.countText}</div>
            ) : null}

            {this.props.filter ? (
              this.props.filter.map(item => (
                // select
                <div className={style.select} key={item.label}>
                  <label className={style.label} htmlFor="#">
                    {item.label}
                  </label>
                  {item.component}
                </div>
              ))
            ) : null}
          </div>
        )}

        <div className={cn(style.wrap, big && style.wrapBig)}>
          {this.props.loading ? (
            <Loading className={style.loading} />
          ) : (
            items.map((item, i) => {
              if (!item) {
                return null;
              }
              if (maxItem > 0 && count >= maxItem) {
                return null;
              }

              if (existed[item.oid]) {
                return null;
              }

              existed[item.oid] = true;
              count++;
              const schema = {};

              if (item.itemProp) {
                schema.itemProp = item.itemProp;
              }
              if (item.itemType) {
                schema.itemType = item.itemType;
              }

              return (
                <PersonGridItem
                  className={cn(style.personItem, big && style.big)}
                  avatarUrl={item.image}
                  personUrl={item.url}
                  name={item.name}
                  key={i}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(style)(WikiGrid);
