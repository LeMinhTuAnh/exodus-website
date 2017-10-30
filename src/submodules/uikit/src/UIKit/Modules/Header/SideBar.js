import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import IconButton from "../../Elements/IconButton";
import Link from "../../Elements/Link";
import SocialIcons from "../../Modules/Footer/SocialIcons";

import s from "./SideBar.scss";

const COPYRIGHT = "© Not A Basement Studio ";

class SideBar extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent || navigator.vendor || window.opera,
    );

    this.state = {
      active: false,
      isMobileDevice,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active,
    });
  }

  render() {
    const { active: activeState, isMobileDevice } = this.state;

    if (!activeState) return null;

    return (
      <div className={s.root}>
        <div className={s.accountInfo}>
          <IconButton
            className={s.closeBtn}
            style={!isMobileDevice && { right: 16 }}
            icon="close"
          />
        </div>
        <div className={s.links}>
          <div className={s.headerLinks}>
            <Link className={s.headerLink} to="#">
              HOME
            </Link>
            <Link className={s.headerLink} to="#">
              ALL MANGA
            </Link>
            <Link className={s.headerLink} to="#">
              LATEST UPDATES
            </Link>
            <Link className={s.headerLink} to="#">
              GENRES
            </Link>
            <Link className={s.headerLink} to="#">
              CHARACTERS
            </Link>
            <Link className={s.headerLink} to="#">
              AUTHORS
            </Link>
          </div>

          <div className={s.footerLinks}>
            <Link className={s.footerLink} to="#">
              About us
            </Link>
            <Link className={s.footerLink} to="#">
              Terms of Service
            </Link>
            <Link className={s.footerLink} to="#">
              Privacy
            </Link>
            <Link className={s.footerLink} to="#">
              Support
            </Link>
            <Link className={s.footerLink} to="#">
              Disclaimer
            </Link>
          </div>
        </div>
        <div className={s.copyRight}>
          <SocialIcons />
          <div className={s.text}>
            {COPYRIGHT}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SideBar);
