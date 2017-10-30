import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import ButtonMore from "../ButtonMore";
import style from "./style.less";

class CollapsedString extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    minChars: PropTypes.number,
    moreText: PropTypes.string,
    useButtonMore: PropTypes.bool,
  };

  static defaultProps = {
    className: "",
    content: "",
    minChars: 200,
    moreText: "read more",
    useButtonMore: false,
  };

  state = {
    expanded: false,
  };

  onExpand = event => {
    if (event) event.preventDefault();
    this.setState({ expanded: true });
  };

  collapseString = str => {
    const { minChars } = this.props;
    let result = str;
    if (str.length > minChars) {
      result = result.substr(0, minChars - 10);
      result = `${result}...`;
    }
    return result;
  };

  render = () => {
    const {
      className,
      content,
      minChars,
      moreText,
      useButtonMore,
    } = this.props;

    const regex = /style="[\w\W][^"]*"/g;

    const removeStyleContent = content.replace(regex, "");

    const expanded = this.state.expanded || removeStyleContent.length <= minChars;

    const createMarkup = markup => ({ __html: `${markup}` });

    return (
      <div className={className}>

        {expanded && <div dangerouslySetInnerHTML={createMarkup(removeStyleContent)} />}

        {!expanded &&
          !useButtonMore &&
          <span>
            <div
              dangerouslySetInnerHTML={createMarkup(
                this.collapseString(removeStyleContent),
              )}
            />
            <a className={style.toggle} href="#" onClick={this.onExpand}>
              {moreText}
            </a>
          </span>}

        {!expanded &&
          useButtonMore &&
          <div>
            <div
              dangerouslySetInnerHTML={createMarkup(
                this.collapseString(removeStyleContent),
              )}
            />
            <ButtonMore
              opened={expanded}
              label={moreText}
              onClick={this.onExpand}
            />
          </div>}

      </div>
    );
  };
}

export default withStyles(style)(CollapsedString);
