import React, { Component } from "react";
import PropTypes from "prop-types";

import Link from "../../../submodules/uikit/src/UIKit/Elements/Link";
import { getObjectUri } from "../../../helper/utils";

class ObjectLink extends Component {
  static defaultProps = {
    object: null,
    otakumoID: null,
  };
  render() {
    const { otakumoID, object, ...other } = this.props;
    let uri = null;
    if (object) {
      uri = getObjectUri(object);
    } else {
      uri = getObjectUri({ oid: otakumoID });
    }
    return <Link to={uri} {...other} />;
  }
}

ObjectLink.propTypes = {
  otakumoID: PropTypes.string,
  object: PropTypes.object,
};

export default ObjectLink;
