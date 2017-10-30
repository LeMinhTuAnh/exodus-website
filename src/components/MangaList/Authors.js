import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Author } from "../../submodules/uikit/src/UIKit/Components/MangaListItem";

import { getObjectUri } from "../../helper/utils";

import s from "./Authors.scss";

const style = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

class Authors extends React.Component {
  static propTypes = {
    authors: PropTypes.array,
  };

  static defaultProps = {
    authors: [],
  };

  render() {
    const { authors, ...other } = this.props;
    if (authors.length === 0) {
      return <div {...other} />;
    }
    const existed = {};
    const authorElements = [];
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      if (!author || !author.oid) {
        continue;
      }
      if (existed[author.oid]) {
        continue;
      }

      existed[author.oid] = true;

      if (authorElements.length > 0) {
        authorElements.push(<span key={i}>; </span>);
      }

      const authorUrl = getObjectUri({ oid: author.oid });

      authorElements.push(
        <Author
          itemProp="author"
          itemScope
          itemType="http://schema.org/Person"
          authorUrl={authorUrl}
          key={author.oid}
        >
          <span itemProp="name">{author.name}</span>
        </Author>,
      );
    }

    return (
      <div style={style} className={s.root} {...other}>
        {authorElements}
      </div>
    );
  }
}

export default withStyles(s)(Authors);
