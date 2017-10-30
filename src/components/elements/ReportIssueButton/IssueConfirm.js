import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import Checkbox from "react-mdl/lib/Checkbox";
import cn from "classnames";
import Button from "react-mdl/lib/Button";

// submodules
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";
import Checkbox from "../../../submodules/uikit/src/UIKit/Elements/CheckBox";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../../submodules/uikit/src/UIKit/Components/Dialog";
import TextField from "../../../submodules/uikit/src/UIKit/Elements/TextField";

import s from "./style.less"; // eslint-disable-line

// import UploadImage from "../../../components/elements/UploadImage";

class IssueConfirm extends React.Component {
  static propTypes = {
    onBackClick: PropTypes.func,
    onInputComment: PropTypes.func,
    onUploadImage: PropTypes.func,
    onRemoveImage: PropTypes.func,
    onInputEmail: PropTypes.func,
    onCheckNotify: PropTypes.func,
    onSubmit: PropTypes.func,
    comment: PropTypes.string,
    user: PropTypes.object,
    email: PropTypes.string,
    fileName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    commentPlaceholder: PropTypes.string,
    backButtonTitle: PropTypes.string,
    submitButtonTitle: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    onBackClick: () => {},
    onInputComment: () => {},
    onUploadImage: () => {},
    onRemoveImage: () => {},
    onInputEmail: () => {},
    onCheckNotify: () => {},
    onSubmit: () => {},
    comment: "",
    user: {},
    email: "",
    fileName: "",
    title: "",
    description: "",
    commentPlaceholder: "",
    backButtonTitle: "",
    submitButtonTitle: "",
    error: "",
  };

  constructor() {
    super();
    this.state = {
      notify: false,
    };
  }

  onHandleSubmit = e => {
    e.preventDefault();
  };

  onCheckNotify = () => {
    this.setState({
      notify: !this.state.notify,
    });

    this.props.onCheckNotify();
  };

  render() {
    const {
      user = {},
      // objectName,
      // issue = "",
      title,
      description,
      commentPlaceholder,
      error,
    } = this.props;

    return (
      <div className={s.issueConfirm}>
        <DialogTitle>{title}</DialogTitle>
        <p className={s.description}>{description}</p>

        <DialogContent>
          <TextField
            onChange={e => this.props.onInputComment(e.target.value)}
            value={this.props.comment}
            label={commentPlaceholder}
            className={s.issueConfirmInput}
          />

          <div className={s.uploadFileWrapper}>
            <Button raised className={s.attachFileButton}>
              <label htmlFor="attachfilebutton">
                Attach a file
                <input
                  id="attachfilebutton"
                  type="file"
                  accept="image/*"
                  onChange={this.props.onUploadImage}
                  ref={input => {
                    this.attachFileButton = input;
                  }}
                />
              </label>
            </Button>

            <div className={s.filename}>
              {this.props.fileName ? this.props.fileName : "Max 10MB (optional)"}
            </div>

            {this.props.fileName && (
              <FlatButton
                className={cn(s.buttons, s.removeFileButton)}
                onClick={this.props.onRemoveImage}
                disabled={!this.props.fileName}
              >
                Remove
              </FlatButton>
            )}
          </div>

          <div className={s.checkBoxWrapper}>
            <form onSubmit={this.onHandleSubmit}>
              <Checkbox
                onChange={this.onCheckNotify}
                label="Notify me when this issue is resolved"
              />

              {this.state.notify && (
                <div className={s.emailInputWrapper}>
                  {user.email ? (
                    <p className={s.emailDescription}>
                      Notification will be sent to your email at {user.email}{" "}
                    </p>
                  ) : (
                    <div>
                      <TextField
                        type="email"
                        className={s.issueConfirmInput}
                        onChange={e => this.props.onInputEmail(e.target.value)}
                        label="Enter your email"
                        value={this.props.email}
                      />
                      <p className={s.errorText}>
                        {/* Email error message here */}
                        {error}
                      </p>

                      <p className={s.emailDescription}>Notification will be sent to this email.</p>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </DialogContent>

        <DialogActions className={s.buttonsWrapper}>
          <FlatButton className={s.buttons} onClick={this.props.onBackClick}>
            {this.props.backButtonTitle ? this.props.backButtonTitle : "Back"}
          </FlatButton>
          <FlatButton className={s.buttons} onClick={this.props.onSubmit}>
            {this.props.submitButtonTitle ? this.props.submitButtonTitle : "Submit"}
          </FlatButton>
        </DialogActions>
      </div>
    );
  }
}

export default withStyles(s)(IssueConfirm);
