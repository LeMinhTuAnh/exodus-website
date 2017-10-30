import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./FilteringItem.scss";

class FilteringItem extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onRemove: PropTypes.func,
    text: PropTypes.string,
    params: PropTypes.array,
  };

  static defaultProps = {
    label: "",
    text: "",
    params: [],
    onRemove: null,
  };

  shouldComponentUpdate(nextProps) {
    return this.props.label !== nextProps.label || this.props.text !== nextProps.text;
  }

  onRemove = event => {
    event.preventDefault();
    if (this.props.onRemove) {
      this.props.onRemove(...this.props.params);
    }
  };

  render() {
    return (
      <div className={s.item}>
        <span className={s.type}>
          {this.props.label}:
        </span>
        {this.props.text}
        <a href="#" onClick={this.onRemove} className={s.remove}>
          <i className="material-icons">clear</i>
        </a>
      </div>
    );
  }
}
export default withStyles(s)(FilteringItem);
