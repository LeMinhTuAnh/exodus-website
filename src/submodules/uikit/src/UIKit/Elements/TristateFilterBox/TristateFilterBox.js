/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import makeid from "../../utils/makeId";

import includeBoxUrl from "../../svg/selected_tristate_filter_box.svg";
import excludeBoxUrl from "../../svg/semiselected_tristate_filter_box.svg";
import unselectBoxUrl from "../../svg/unselect_tristate_filter_box.svg";

import s from "./TristateFilterBox.scss";

import colorCode from "../../utils/colorCode";

const UNSELECTED = 0;
const EXCLUDE = -1;
const INCLUDE = 1;

class TristateFilterBox extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.number,
    className: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: "",
    label: null,
    labelColor: null,
    name: "",
    onChange: null,
    value: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };

    this.id = makeid(5);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  handleOnClick = () => {
    const { value } = this.state;
    const { onChange, ...otherProps } = this.props;

    let newValue = value + 1;
    newValue = newValue > INCLUDE ? EXCLUDE : newValue;

    this.setState({ value: newValue });

    if (onChange) {
      onChange(newValue, { ...otherProps });
    }
  };

  render() {
    const { className, label, labelColor, ...inputProps } = this.props;
    const { value } = this.state;

    const classes = cn("mdl-checkbox", s.root, className);

    const labelStyle = Object.assign(
      {},
      labelColor ? { color: colorCode(labelColor) } : {},
      value === INCLUDE ? { color: colorCode("#29b6f6") } : {}, // primary color
      value === EXCLUDE ? { color: colorCode("#ff5722") } : {}, // warning color
    );

    return (
      <div className={classes} htmlFor={this.id} onClick={this.handleOnClick}>
        <input className={s.input} id={this.id} type="text" value={value} {...inputProps} />
        <span>
          {value === UNSELECTED && (
            <img className={cn(s.box, s.iconImg)} src={unselectBoxUrl} alt="Unselect Box" />
          )}
          {value === INCLUDE && (
            <img className={cn(s.box, s.iconImg)} src={includeBoxUrl} alt="Include Box" />
          )}
          {value === EXCLUDE && (
            <img className={cn(s.box, s.iconImg)} src={excludeBoxUrl} alt="Exclude Box" />
          )}
        </span>
        {label && (
          <span className={cn("mdl-checkbox__label", s.label)} style={labelStyle}>
            {label}
          </span>
        )}
      </div>
    );
  }
}

export default withStyles(s)(TristateFilterBox);
