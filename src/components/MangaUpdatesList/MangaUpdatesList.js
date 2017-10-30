import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import s from "./MangaUpdatesList.scss";

// submodule
import Loading from "../../submodules/uikit/src/UIKit/Elements/Loading";
import ShowMoreButton from "../../submodules/uikit/src/UIKit/Elements/ShowMoreButton";

import MangaUpdatesItem from "./MangaUpdatesItem";

class MangaUpdatesList extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    meta: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
    itemPerPages: PropTypes.number,
    showTableHead: PropTypes.bool,
  };

  static defaultProps = {
    showTableHead: true,
    itemPerPages: 50,
  };

  constructor(props) {
    super(props);
    this.state = {
      maxItem: props.itemPerPages,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (
      nextProps.isLoading !== this.props.isLoading ||
      this.props.items.length !== nextProps.items.length ||
      this.state.maxItem !== nextState.maxItem
    ) {
      return true;
    }

    return this.props.items.join() !== nextProps.items.join();
  };

  onLoadMore = () => {
    const maxItem = this.state.maxItem || this.props.itemPerPages;
    this.setState({ maxItem: maxItem + this.props.itemPerPages });
  };

  render = () => {
    if (this.props.isLoading) {
      return <Loading className={s.loading} />;
    }
    const { items, meta, showTableHead, itemPerPages } = this.props;

    if (!items) {
      return <div>No manga updates currently.</div>;
    }

    const maxItem = this.state.maxItem || itemPerPages;

    return (
      <div itemScope itemType="http://schema.org/ItemList" className={s.tableRoot}>
        {items.length > 0 &&
          <div>
            {showTableHead &&
              <div className={cn(s.tableHeader)}>
                <div className={cn("col-md-5 col-8", s.headerOne)}>Manga</div>
                <div className={cn("col-md-5")}>New chapters</div>
                <div className={cn("col-md-2 col-4", s.headerThree)}>Date updated</div>
              </div>}
            <div className={s.tableContent}>
              {items.map(
                (serieOID, idx) =>
                  idx < maxItem && meta[serieOID]
                    ? <MangaUpdatesItem key={serieOID} serie={meta[serieOID]} />
                    : null,
              )}
            </div>
          </div>}

        {items.length > maxItem
          ? <div className={s.showMoreButton}>
            <ShowMoreButton onClick={this.onLoadMore} />
          </div>
          : null}
      </div>
    );
  };
}

MangaUpdatesList.propTypes = {
  items: PropTypes.array,
};

MangaUpdatesList.defaultProps = {
  items: [],
  isLoading: false,
};

export default withStyles(s)(MangaUpdatesList);
