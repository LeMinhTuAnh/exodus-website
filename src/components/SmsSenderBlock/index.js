import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";

import DirectDownloadButtons from "../elements/DirectDownloadButtons";

import Button from "../elements/Button";
import Loading from "./Loading";

import s from "./style.less"; // eslint-disable-line

const SEND_SMS_STATUS = {
  UNSEND: 0,
  SUCCESS: 1,
  ERROR: 2,
};

class SmsSenderBlock extends React.Component {
  static propTypes = {
    introText: PropTypes.string,
  };

  static defaultProps = {
    introText:
      "Enter your phone number and we’ll send you the download link directly to your phone.",
  };

  constructor(props) {
    super(props);

    this.state = {
      sendStatus: SEND_SMS_STATUS.UNSEND,
      isSending: false,
      phoneNumber: "",
    };
  }

  componentDidMount() {
    branch.init("key_live_ofk5W8TRJqignl2ko9TfrkojAtge6Y68"); // eslint-disable-line no-undef
  }

  clickResendLink = e => {
    // Handle Click resend link here!
    e.preventDefault();

    this.setState({
      sendStatus: SEND_SMS_STATUS.UNSEND,
      isSending: false,
    });
  };

  clickTryAgain = e => {
    // Handle Click try again here!
    e.preventDefault();

    this.setState({
      sendStatus: SEND_SMS_STATUS.UNSEND,
      isSending: false,
    });
  };

  phoneInputChange = e => {
    this.setState({
      phoneNumber: e.target.value.trim().toString(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isSending: true,
    });

    const phoneNumber = this.state.phoneNumber;

    const linkData = {
      tag: [],
      chanel: "Website",
      feature: "TextMeTheApp",
      data: {
        phoneNumber,
      },
    };

    const options = {};

    const callback = err => {
      if (err) {
        this.setState({
          isSending: false,
          sendStatus: SEND_SMS_STATUS.ERROR,
        });
      } else {
        this.setState({
          isSending: false,
          sendStatus: SEND_SMS_STATUS.SUCCESS,
        });
      }
    };

    branch.sendSMS(phoneNumber, linkData, options, callback); // eslint-disable-line no-undef
  };

  render() {
    const { introText, ...otherProps } = this.props;

    const { sendStatus, isSending } = this.state;

    delete otherProps.clickSendLink;

    let element = null;

    if (sendStatus === SEND_SMS_STATUS.UNSEND) {
      element = (
        <div {...otherProps}>
          <div className={s.introText}>
            {introText}
          </div>
          <div className={s.infoText}>Message and data rate may apply.</div>

          <form onSubmit={this.handleSubmit}>
            <input
              className={s.phoneInput}
              name="phonenumber"
              onChange={this.phoneInputChange}
              placeholder="+00 0000000 000000"
              value={this.state.phoneNumber}
              required
              type="tel"
            />

            <Button type="submit" bsStyle="primary" className={s.button}>
              {isSending ? <Loading style={{ margin: "0 auto" }} /> : "TEXT ME A LINK"}
            </Button>
          </form>

          <div className={s.infoText}>
            <i className={cn("material-icons", s.icon)}>lock</i>
            <span>Your info is kept strictly confidential.</span>
          </div>
        </div>
      );
    } else if (sendStatus === SEND_SMS_STATUS.SUCCESS) {
      element = (
        <div className={s.wrap}>
          <div className={s.introText}>
            The download link has been sent to your phone. <br />
            Didn’t receive it?&nbsp;
            <a className={s.resendButton} href="#" onClick={this.clickResendLink}>
              RESEND THE LINK NOW
            </a>
            <DirectDownloadButtons />
          </div>
        </div>
      );
    } else {
      element = (
        <div className={s.wrap}>
          <div className={s.introText}>
            There is some problems sending the link.&nbsp;
            <a className={s.resendButton} href="#" onClick={this.clickTryAgain}>
              TRY AGAIN
            </a>
            <DirectDownloadButtons />
          </div>
        </div>
      );
    }

    return (
      <div>
        {element}
      </div>
    );
  }
}

export default withStyles(s)(SmsSenderBlock);
