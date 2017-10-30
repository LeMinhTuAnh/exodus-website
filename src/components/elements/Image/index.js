import React from "react";
import PropTypes from "prop-types";
import BootstrapImage from "react-bootstrap/lib/Image";

// base64 encoded icon
// eslint-disable-next-line max-len
const iconError = "/svg/icon_error.svg";
// eslint-disable-next-line max-len
// const iconLoading = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPgo8Zz4KCTxwYXRoIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8xXyk7ZmlsbDpub25lO3N0cm9rZTojMkQ5OEQ1O3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTE2LDIuODc0CgkJYzcuMjUsMCwxMy4xMjYsNS44NzcsMTMuMTI2LDEzLjEyNlMyMy4yNSwyOS4xMjYsMTYsMjkuMTI2UzIuODc0LDIzLjI1LDIuODc0LDE2Ii8+CjwvZz4KPC9zdmc+Cg==";

// TODO: add loading state

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string,
  };
  static defaultProps = {
    src: "",
  };
  state = {
    status: 0, // 0 = loading, 1:=success, -1 = error
  };

  onError = () => {
    this.setState({ status: -1 });
  };

  render = () => {
    const { src, ...props } = this.props;
    return (
      <BootstrapImage
        {...props}
        onError={this.onError}
        src={this.state.status === -1 ? iconError : src}
      />
    );
  };
}

export default Image;
