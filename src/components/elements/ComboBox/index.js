import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import style from "./style.less";

class ComboBox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    className: "",
    options: [],
  }

  render = () => {
    const { className, options, ...props } = this.props;
    return (
      <div className={classnames(style.comboBox, className)}>
        <select {...props}>
          {options.map(({ value, label }) => (
            <option value={value} key={value}>{label}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default withStyles(style)(ComboBox);
