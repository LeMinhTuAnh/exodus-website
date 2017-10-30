import React, { Component } from "react";
import PropTypes from "prop-types";

import Author from "../../submodules/uikit/src/UIKit/Components/MangaGridItem/Author";

import { getObjectUri } from "../../helper/utils";

class Authors extends Component {
  static defaultProps = {
    authors: [],
    className: null,
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
      authorElements.push(
        <Author
          itemProp="author"
          itemScope
          itemType="http://schema.org/Person"
          url={getObjectUri({ oid: author.oid })}
          key={author.oid}
          title={author.name}
        >
          <span itemProp="name">{author.name}</span>
        </Author>,
      );
    }

    return (
      <div className={this.props.className} {...other}>
        {authorElements}
      </div>
    );
  }
}

Authors.propTypes = {
  authors: PropTypes.array,
  className: PropTypes.string,
};

export default Authors;
