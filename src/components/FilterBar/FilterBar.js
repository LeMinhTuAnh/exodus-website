/* eslint jsx-a11y/label-has-for: "off" */
/* eslint no-nested-ternary: "off" */
/* eslint prefer-destructuring: "off" */

import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Radio from "react-mdl/lib/Radio";
import classnames from "classnames";
import RadioGroup from "../../submodules/uikit/src/3rd_modules/react-radio";

// submodules
import RaisedButton from "../../submodules/uikit/src/UIKit/Elements/RaisedButton";
import Collapse from "../../submodules/uikit/src/UIKit/Components/Collapse";
import TriStateFilterBox from "../../submodules/uikit/src/UIKit/Elements/TristateFilterBox";
// import Radio from "../../submodules/uikit/src/UIKit/Elements/RadioBox";

// import TriStateCheckbox from "../elements/TriStateCheckbox";
import ComboBox from "../elements/ComboBox";
// import Button from "../elements/Button";

import FilteringItem from "./FilteringItem";

import style from "./style.less"; // eslint-disable-line

import s from "./FilterBar.scss";

const STATUS_OPTIONS = {
  all: {
    value: "all",
    id: "all",
    label: "All",
  },
  completed: {
    value: "completed",
    id: "completed",
    label: "Completed",
  },
  ongoing: {
    value: "ongoing",
    id: "ongoing",
    label: "Ongoing",
  },
};

// TODO: MODIFY RANK OPTIONS
const RANK_OPTIONS = [
  {
    value: "all",
    id: "all",
    label: "All",
  },
  {
    value: "1-999",
    id: "zero",
    label: "1 - 999",
  },
  {
    value: "1000-2000",
    id: "one",
    label: "1k - 2k",
  },
  {
    value: "2000-3000",
    id: "two",
    label: "2k - 3k",
  },
  {
    value: "3000-4000",
    id: "three",
    label: "3k - 4k",
  },
  {
    value: "4000-5000",
    id: "four",
    label: "4k - 5k",
  },
  {
    value: "5000-6000",
    id: "five",
    label: "5k - 6k",
  },
  {
    value: "6000-7000",
    id: "six",
    label: "6k - 7k",
  },
  {
    value: "7000-8000",
    id: "seven",
    label: "7k - 8k",
  },
  {
    value: "8000-9000",
    id: "eight",
    label: "8k - 9k",
  },
  {
    value: "9000-10000",
    id: "nine",
    label: "9k - 10k",
  },
  {
    value: "10000-11000",
    id: "ten",
    label: "10k - 11k",
  },
];

const cacheGenres = {};

class FilterBar extends React.Component {
  static propTypes = {
    genres: PropTypes.array,
    currentSelected: PropTypes.object,
    defaultOptions: PropTypes.object,
    currentFilter: PropTypes.object.isRequired,
    onApply: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onGenreChange: PropTypes.func.isRequired,
    onRemoveGenresFilter: PropTypes.func.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onRankChange: PropTypes.func.isRequired,
    onRemoveStatusFilter: PropTypes.func.isRequired,
    onRemoveRankFilter: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    comboBoxes: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.array,
      defaultValue: PropTypes.any,
      onChange: PropTypes.func,
    })),
  };

  static defaultProps = {
    genres: [],
    comboBoxes: [],
    currentSelected: null,
    defaultOptions: {},
  };

  shouldComponentUpdate = nextProps =>
    JSON.stringify([nextProps.expanded, nextProps.currentSelected]) !==
    JSON.stringify([this.props.expanded, this.props.currentSelected]);

  getGenreName(genreId) {
    if (!this.props.genres) {
      return "Unknown";
    }

    if (cacheGenres[genreId]) {
      return cacheGenres[genreId];
    }

    this.props.genres.forEach(genre => {
      cacheGenres[genre.oid] = genre.name;
    }, this);

    return cacheGenres[genreId] || "Unknown";
  }

  renderRadio = (props, index) => {
    // eslint-disable-next-line react/prop-types
    const { children, key } = props;

    return (
      <div key={key || index} className={s.column}>
        <Radio {...children[0].props}>{children[1]}</Radio>
      </div>
    );
  };

  render() {
    const { expanded, currentSelected } = this.props;
    const { status, genres, rank } = currentSelected;

    const filteringItems = [];
    if (!expanded) {
      const { currentFilter } = this.props;
      const statusFilterOn =
        JSON.stringify(currentFilter.status) !== JSON.stringify(this.props.defaultOptions.status);
      const statusRankOn =
        JSON.stringify(currentFilter.rank) !== JSON.stringify(this.props.defaultOptions.rank);
      const genresFilterOn =
        JSON.stringify(currentFilter.genres) !== JSON.stringify(this.props.defaultOptions.genres);
      if (statusFilterOn) {
        filteringItems.push(<FilteringItem
          label="Status"
          key="status-filter-item"
          text={STATUS_OPTIONS[currentFilter.status].label}
          params={[]}
          onRemove={this.props.onRemoveStatusFilter}
        />);
      }
      if (statusRankOn) {
        let label = null;
        RANK_OPTIONS.forEach(item => {
          if (item.value === currentFilter.rank) {
            label = item.label;
          }
        });
        if (label) {
          filteringItems.push(<FilteringItem
            label="Rank"
            key="rank-filter-item"
            text={label}
            params={[]}
            onRemove={this.props.onRemoveRankFilter}
          />);
        }
      }
      if (genresFilterOn) {
        Object.keys(currentFilter.genres).forEach(genreId => {
          if (currentFilter.genres[genreId]) {
            filteringItems.push(<FilteringItem
              key={`genre-filter-item-${genreId}`}
              label="Include"
              text={this.getGenreName(genreId)}
              params={[genreId]}
              onRemove={this.props.onRemoveGenresFilter}
            />);
          } else {
            filteringItems.push(<FilteringItem
              key="genre-filter-item"
              label="Exclude"
              text={this.getGenreName(genreId)}
              params={[genreId]}
              onRemove={this.props.onRemoveGenresFilter}
            />);
          }
        }, this);
      }
    }

    const filtering = filteringItems.length > 0;
    const propGenres = this.props.genres;

    return (
      <div className={classnames(s.root, expanded && s.expanded)}>
        <div className={s.clearfix}>
          <div className={s.comboBoxes}>
            {this.props.comboBoxes.map(({ label, options, defaultValue, onChange }) => (
              <div className={style.select} key={label}>
                <label className={s.comboBoxLabel}>{label}</label>
                <ComboBox options={options} value={defaultValue} onChange={onChange} />
              </div>
            ))}
          </div>

          {/* Filter Button */}
          <RaisedButton
            className={classnames(s.btnFilter, filtering ? style.filtering : "")}
            onClick={this.props.onToggle}
            icon="filter_list"
            bgColor={!expanded ? "#eee" : null}
            textColor={!expanded ? "black" : null}
          >
            Filter
          </RaisedButton>
          <div
            className={s.activeFilters}
            style={filteringItems.length === 0 ? {} : { marginBottom: -12 }}
          >
            {filteringItems}
          </div>
        </div>

        {/* Collapse Button */}
        <Collapse expanded={expanded}>
          <div className={style.formFilter}>
            <div className={s.sectionTitle}>Status</div>
            <RadioGroup
              className={s.radioGroup}
              name="status"
              value={status}
              renderRadio={this.renderRadio}
              onChange={this.props.onStatusChange}
              items={Object.values(STATUS_OPTIONS)}
            />

            <div className={s.sectionTitle}>Rank</div>
            <RadioGroup
              className={s.radioGroup}
              name="rank"
              value={rank}
              renderRadio={this.renderRadio}
              onChange={this.props.onRankChange}
              items={RANK_OPTIONS}
            />

            <div className={s.sectionTitle}>Genres</div>
            <div className={s.genres}>
              {propGenres &&
                Object.values(propGenres).map(({ oid, name }) => (
                  <div key={oid} className={s.column}>
                    <TriStateFilterBox
                      key={oid}
                      label={name}
                      data-oid={oid}
                      value={genres[oid] === true ? 1 : genres[oid] === false ? -1 : 0}
                      onChange={this.props.onGenreChange}
                    />
                  </div>
                ))}
            </div>

            <div className={s.buttons}>
              <RaisedButton
                bgColor="#eee"
                textColor="black"
                className={classnames(s.button)}
                onClick={this.props.onReset}
              >
                Reset
              </RaisedButton>
              <RaisedButton className={classnames(s.button)} onClick={this.props.onApply}>
                Apply
              </RaisedButton>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(s)(FilterBar);
