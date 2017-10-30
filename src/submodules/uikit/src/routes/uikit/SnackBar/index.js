import React, { PureComponent } from "react";
import RaisedButton from "../../../UIKit/Elements/RaisedButton";
import SnackBar from "../../../UIKit/Components/SnackBar";

class SnackBarComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.handleShowSnackbarDefault = this.handleShowSnackbarDefault.bind(this);
    this.handleTimeoutSnackbarDefault = this.handleTimeoutSnackbarDefault.bind(this);
    this.handleShowSnackbar4 = this.handleShowSnackbar4.bind(this);
    this.handleTimeoutSnackbar4 = this.handleTimeoutSnackbar4.bind(this);
    this.handleClickActionSnackbar4 = this.handleClickActionSnackbar4.bind(this);
    this.state = {
      isSnackbarDefaultActive: false,
      isSnackbar4Active: false,
    };
  }

  handleShowSnackbarDefault() {
    this.setState({
      isSnackbarDefaultActive: true,
    });
  }
  handleShowSnackbar4() {
    this.setState({
      isSnackbar4Active: true,
      btnBgColor: `#${Math.floor(Math.random() * 0xffffff).toString(16)}`,
    });
  }
  handleTimeoutSnackbarDefault() {
    this.setState({ isSnackbarDefaultActive: false });
  }
  handleTimeoutSnackbar4() {
    this.setState({ isSnackbar4Active: false });
  }
  handleClickActionSnackbar4() {
    this.setState({
      btnBgColor: "",
    });
  }

  render() {
    const { btnBgColor, isSnackbarDefaultActive, isSnackbar4Active } = this.state;
    return (
      <div>
        <h1>Snack Bar</h1>
        <br />
        <br />
        <h4>Default Snack Bar:</h4>
        <br />
        <RaisedButton onClick={this.handleShowSnackbarDefault}>Show Snackbar</RaisedButton>
        <br />
        <br />
        <h4>Snack Bar with Undo Button:</h4>
        <br />
        <RaisedButton style={{ backgroundColor: btnBgColor }} onClick={this.handleShowSnackbar4}>
          Show Snackbar
        </RaisedButton>
        <br />
        <SnackBar active={isSnackbarDefaultActive} onTimeout={this.handleTimeoutSnackbarDefault}>
          This is default Snack bar.
        </SnackBar>
        <SnackBar
          active={isSnackbar4Active}
          buttonLabel="Undo"
          onButtonClick={this.handleClickActionSnackbar4}
          timeout={3000}
          onTimeout={this.handleTimeoutSnackbar4}
        >
          Changed the button color! Autohide in 3s. Long text long text will break lines.
        </SnackBar>
      </div>
    );
  }
}
export default SnackBarComponent;
