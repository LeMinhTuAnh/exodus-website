import React from "react";

import ImageBrowser from "../../../UIKit/Modules/ImageBrowser";

const images = [
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.gk_ST7VN.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.gY3rTXAB.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.jsiD2Ep6.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.i_wb3pcB.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.258otpzP.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.eyYABef.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.il_A7XKI.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.jv_fz8Eb.jpg",
  "https://f01.mrcdn.info/file/mrportal/h/3/3/6/E7.25_sbJad.jpg",
];

class ImageBrowserDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  onHide = () => {
    this.setState({
      active: false,
    });
  };

  showImageBrowser = () => {
    this.setState({
      active: true,
    });
  };
  render() {
    const { active } = this.state;

    return (
      <div>
        <button onClick={this.showImageBrowser}>Show ImageBrowser</button>
        <ImageBrowser onHide={this.onHide} active={active} images={images} />
      </div>
    );
  }
}

export default ImageBrowserDemo;
