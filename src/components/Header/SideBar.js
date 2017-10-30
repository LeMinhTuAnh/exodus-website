import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";
import ReactCSSTransitionGroup from "react-transition-group/CSSTransition";

import Account from "../../routes/account/containers/Account";

// submodules
import IconButton from "../../submodules/uikit/src/UIKit/Elements/IconButton";
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";
import SocialIcons from "../../submodules/uikit/src/UIKit/Modules/Footer/SocialIcons";

import MenuItem from "./MenuItem";

import s from "./SideBar.scss";

const COPYRIGHT = "© Not A Basement Studio ";

class SideBar extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    onCloseSideBar: PropTypes.func,
  };
  static defaultProps = {
    onCloseSideBar: () => {},
  };

  //   constructor(props) {
  //     super(props);

  //     const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry/i.test(
  //       navigator.userAgent || navigator.vendor || window.opera,
  //     );

  //     this.state = {
  //       active: false,
  //       isMobileDevice,
  //     };
  //   }

  //   componentWillReceiveProps(nextProps) {
  //     this.setState({
  //       active: nextProps.active,
  //     });
  //   }

  render() {
    // const { active: activeState, isMobileDevice } = this.state;
    const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent || navigator.vendor || window.opera,
    );
    const { active: activeState } = this.props;

    return (
      <ReactCSSTransitionGroup
        in={activeState}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames={{
          enter: s.enter,
          enterActive: s.enterActive,
          exit: s.leave,
          exitActive: s.leaveActive,
        }}
        component="div"
      >
        <div className={s.root}>
          <div className={s.accountInfo}>
            <IconButton
              className={s.closeBtn}
              style={!isMobileDevice && { right: 16 }}
              icon="close"
              onClick={this.props.onCloseSideBar}
            />

            <Account mobile onHideMenu={this.props.onCloseSideBar} />
          </div>
          <div className={s.links}>
            <div className={s.headerLinks}>
              <MenuItem className={s.headerLink} to="/" onClick={this.props.onCloseSideBar}>
                HOME
              </MenuItem>
              <MenuItem className={s.headerLink} to="/manga" onClick={this.props.onCloseSideBar}>
                ALL MANGA
              </MenuItem>
              <MenuItem
                className={s.headerLink}
                to="/manga/latest"
                onClick={this.props.onCloseSideBar}
              >
                LATEST UPDATES
              </MenuItem>
              <MenuItem
                className={cn(s.headerLink)}
                to="/genre"
                onClick={this.props.onCloseSideBar}
              >
                GENRES
              </MenuItem>
              <MenuItem
                className={s.headerLink}
                to="/character"
                onClick={this.props.onCloseSideBar}
              >
                CHARACTERS
              </MenuItem>
              <MenuItem className={s.headerLink} to="/author" onClick={this.props.onCloseSideBar}>
                AUTHORS
              </MenuItem>
            </div>

            <div className={s.footerLinks}>
              <Link onClick={this.props.onCloseSideBar} className={s.footerLink} to="/about">
                About us
              </Link>
              <Link onClick={this.props.onCloseSideBar} className={s.footerLink} to="/term">
                Terms of Service
              </Link>
              <Link onClick={this.props.onCloseSideBar} className={s.footerLink} to="/privacy">
                Privacy
              </Link>
              <Link
                onClick={this.props.onCloseSideBar}
                external
                className={s.footerLink}
                to="http://support.mangarock.com/"
              >
                Customer Support
              </Link>
              <Link onClick={this.props.onCloseSideBar} className={s.footerLink} to="/disclamer">
                Disclaimer
              </Link>
            </div>
          </div>
          <div className={s.copyRight}>
            <SocialIcons />
            <div className={s.text}>{COPYRIGHT}</div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default withStyles(s)(SideBar);
