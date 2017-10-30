import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Icon from "../../Elements/Icon";

import s from "./SearchBox.scss";

import {
  SEARCH_BOX_LARGE_SIZE,
  SEARCH_BOX_SMALL_SIZE,
  SEARCH_BOX_MEDIUM_SIZE,
} from "../../constant/components";

class SearchBox extends Component {
  static propTypes = {
    placeHolder: PropTypes.string,
    size: PropTypes.oneOf([
      SEARCH_BOX_LARGE_SIZE,
      SEARCH_BOX_SMALL_SIZE,
      SEARCH_BOX_MEDIUM_SIZE,
    ]),
    dark: PropTypes.bool,
    hasButton: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onSearchButtonClick: PropTypes.func,
    isMobileSearchOpen: PropTypes.bool,
  };

  static defaultProps = {
    size: SEARCH_BOX_MEDIUM_SIZE,
    dark: false,
    hasButton: false,
    disabled: false,
    className: null,
    onChange: () => {},
    onSubmit: () => {},
    onSearchButtonClick: null,
    value: "",
    placeHolder: "",
    isMobileSearchOpen: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      inputFocused: false,
    };
  }

  componentDidMount() {
    if (this.props.isMobileSearchOpen) {
      this.input.focus();
    }
  }

  onClickClear = () => {
    this.props.onChange("");
    this.input.focus();
  };

  handleOnChange = e => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e.target.value);
    }
  };

  handleOnFocus = () => {
    this.setState({
      inputFocused: true,
    });
  };

  handleOnBlur = () => {
    this.setState({
      inputFocused: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  handleSearchButtonClick = e => {
    const { onSearchButtonClick } = this.props;
    e.preventDefault();

    if (onSearchButtonClick) {
      onSearchButtonClick();
    }
  };

  render() {
    const {
      placeHolder,
      size,
      dark,
      hasButton,
      disabled,
      className,
      value,
      onSubmit,
      ...otherProps
    } = this.props;

    delete otherProps.onChange;
    delete otherProps.onSearchButtonClick;
    delete otherProps.isMobileSearchOpen;

    const { inputFocused } = this.state;

    const rootClass = cn(
      s.root,
      className,
      hasButton && s.hasButton,
      dark && s.dark,
      size === SEARCH_BOX_SMALL_SIZE && s.sizeSmall,
      size === SEARCH_BOX_LARGE_SIZE && s.sizeLarge,
      inputFocused && s.inputFocused,
      disabled && s.disabled,
    );

    const isEmty = value.length === 0;

    return (
      <div className={rootClass} {...otherProps}>
        <div className={s.wrap}>
          <form className={s.form} onSubmit={this.handleSubmit}>
            {!hasButton && <Icon className={s.icon} name="search" />}
            <input
              onFocus={this.handleOnFocus}
              onBlur={this.handleOnBlur}
              onChange={this.handleOnChange}
              value={value}
              ref={input => (this.input = input)} // eslint-disable-line no-return-assign
              className={s.input}
              type="text"
              placeholder={placeHolder}
              disabled={disabled}
            />
          </form>
          {!isEmty &&
            <button className={s.clear} onClick={this.onClickClear}>
              <Icon className={s.icon} name="close" />
            </button>}
        </div>
        {hasButton &&
          <button
            className={s.searchButton}
            onClick={this.handleSearchButtonClick}
          >
            <Icon className={s.icon} name="search" />
          </button>}
      </div>
    );
  }
}

export default withStyles(s)(SearchBox);
