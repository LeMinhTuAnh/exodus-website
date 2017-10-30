/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Icon from "../Icon";

import makeid from "../../utils/makeId";

import s from "./TristateSelectBox.scss";

import colorCode from "../../utils/colorCode";

const UNSELECTED = 0;
const SEMISELECTED = 1;
const SELECTED = 2;

class TristateSelectBox extends React.PureComponent {
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

  handleOnClick = () => {
    const { value } = this.state;
    const { onChange } = this.props;

    let newValue = value;
    newValue = newValue <= 1 ? (newValue += 1) : UNSELECTED;

    this.setState({ value: newValue });

    if (onChange) {
      onChange(newValue);
    }
  };

  render() {
    const { className, label, labelColor, ...inputProps } = this.props;
    const { value } = this.state;

    const classes = cn("mdl-checkbox", s.root, className);

    const labelStyle = Object.assign({}, labelColor ? { color: colorCode(labelColor) } : {});

    return (
      <label className={classes} htmlFor={this.id} onClick={this.handleOnClick}>
        <input className={s.input} id={this.id} type="text" value={value} {...inputProps} />
        <span>
          {value === UNSELECTED && <Icon className={s.box} name="check_box_outline_blank" />}
          {value === SELECTED && <Icon className={cn(s.box, s.blue)} name="check_box" />}
          {value === SEMISELECTED &&
            <Icon className={cn(s.box, s.blue)} name="indeterminate_check_box" />}
        </span>
        {label &&
          <span className={cn("mdl-checkbox__label", s.label)} style={labelStyle}>
            {label}
          </span>}
      </label>
    );
  }
}

export default withStyles(s)(TristateSelectBox);
