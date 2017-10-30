import React, { Component } from "react";
import PropTypes from "prop-types";

import ObjectLink from "../elements/ObjectLink";

class AuthorSubtext extends Component {
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
        authorElements.push(<span>; </span>);
      }
      authorElements.push(
        <ObjectLink itemProp="author" itemScope itemType="http://schema.org/Person" otakumoID={author.oid} key={author.oid} title={author.name}>
          <span itemProp="name">
            {author.name}
          </span>
        </ObjectLink>,
      );
    }

    return (
      <div {...other}>
        {authorElements}
      </div>
    );
  }
}

AuthorSubtext.propTypes = {
  authors: PropTypes.array,
};

export default AuthorSubtext;
