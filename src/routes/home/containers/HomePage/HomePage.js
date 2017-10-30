/* eslint
max-len: "off",
prefer-destructuring : "off"
*/
import React from "react";
import { connect } from "react-redux";
import deepcopy from "deepcopy";
// submodules
import {
  Container,
  Col,
  Row,
} from "../../../../submodules/uikit/src/UIKit/Modules/GridSystem";
import Block from "../../../../submodules/uikit/src/UIKit/Elements/Block";
import { BlockTitle } from "../../../../submodules/uikit/src/UIKit/Components/Title";
import Divider from "../../../../submodules/uikit/src/UIKit/Elements/Divider";
import Loading from "../../../../submodules/uikit/src/UIKit/Elements/Loading";

// internal components
import HotMangaUpdates from "../../components/HotMangaUpdates";

import DelayRenderElement from "../../../../components/elements/DelayRenderElement";
import MangaUpdatesList from "../../../../components/MangaUpdatesList";
import GenresList from "../../components/GenresList";
import MangaList from "../../../../components/MangaList";

import { requestBanners } from "../../actions";

import * as REDUCERS from "../../../../constants/reducers";
import {
  MAX_SERIES_IN_BLOCK,
  RUNTIME_HTML_META,
} from "../../../../constants/index";

import { setRuntimeVariable } from "../../../../actions/runtime";

// import { setAllSerieFilterOptions } from "../../../manga/actions";
import history from "../../../../core/history";

// import { DEFAULT_FILTER_OPTIONS } from "../../../manga/reducers/allMangaReducer";

const mapStateToProps = state => {
  const topPopular =
    (state[REDUCERS.REDUCER_TOP_POPULAR] &&
      state[REDUCERS.REDUCER_TOP_POPULAR].data) ||
    [];

  const readRightNowSeries =
    (state[REDUCERS.REDUCER_READ_RIGHT_NOW] &&
      state[REDUCERS.REDUCER_READ_RIGHT_NOW].data) ||
    [];

  return {
    // banners: state[REDUCERS.REDUCER_HOME].banners,
    genres: state[REDUCERS.REDUCER_GENRE],
    isLoadingLatestUpdates:
      (state[REDUCERS.REDUCER_HOME] &&
        state[REDUCERS.REDUCER_HOME].isLatestLoading) ||
      false,
    hotUpdates: state[REDUCERS.REDUCER_HOME].hotLatestItems || [],
    latestUpdates: state[REDUCERS.REDUCER_HOME].latestItems || [],
    topPopular,
    readRightNowSeries,
  };
};

const mapDispatchToProps = dispatch => ({
  loadBanners() {
    dispatch(requestBanners());
  },
  setRankFilter: () => {
    const options = {
      status: "all",
      genres: {},
      order: "rank",
    };
  },
  setGenreFilter: options => {},
  setMetaTags: () => {
    dispatch(
      setRuntimeVariable({
        name: RUNTIME_HTML_META,
        value: {},
      }),
    );
  },
});

class HomePage extends DelayRenderElement {
  gotoAllManga = e => {
    e.preventDefault();
    this.props.setRankFilter();
    history.push("/manga");
  };

  onGenreItemClick = oid => {
    const options = deepcopy(DEFAULT_FILTER_OPTIONS);
    options.genres[oid] = true;
    this.props.setGenreFilter(options);
  };

  render() {
    const genreData = this.props.genres || [];
    const hotUpdates = this.props.hotUpdates || [];
    const latestUpdateData = this.props.latestUpdates;

    const latestUpdateMeta = {};
    const latestUpdateItems = [];
    for (let i = 0; i < latestUpdateData.length; i++) {
      const series = latestUpdateData[i];
      latestUpdateMeta[series.oid] = series;
      latestUpdateItems.push(series.oid);
    }

    const topPopular = this.props.topPopular;
    const readRightNowSeries = this.props.readRightNowSeries
      .slice(0, MAX_SERIES_IN_BLOCK)
      .map(item => item.oid);

    const showHotUpdates = hotUpdates.length > 0;

    return (
      <Container>
        <Row>Home page</Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
