import React from "react";
// import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import cn from "classnames";
import ReactCSSTransitionGroup from "react-transition-group/CSSTransition";

// submodules
import {
  Menu,
  MenuItem,
} from "../../submodules/uikit/src/UIKit/Components/Menu";
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";
import Icon from "../../submodules/uikit/src/UIKit/Elements/Icon";
import IconButton from "../../submodules/uikit/src/UIKit/Elements/IconButton";
// import SideBar from "../../submodules/uikit/src/UIKit/Modules/Header/SideBar";
// import MR_LOGO_URL from "../../submodules/uikit/src/UIKit/svg/mr_logo.svg";

import SideBar from "./SideBar";

import Account from "../../routes/account/containers/Account";
// import HeaderSearch from "../../routes/search/containers/HeaderSearch";
import GetAppBar from "../GetAppBar";

import HeaderMenuItem from "./MenuItem";

import s from "./Header.scss";

class Header extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isSearchOpen: false,
    };
  }

  handleOpenMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  handleOpenHeaderSearch = (state = true) => {
    this.setState({
      isSearchOpen: state,
    });
  };

  handleCloseSideBar = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  render() {
    const { isMenuOpen, isSearchOpen } = this.state;
    return (
      <div className={s.root} {...this.props}>
        <div className={s.getAppBarWrap}>
          <GetAppBar className={s.getAppBar} />
        </div>

        <div className={s.rootHeader}>
          <div className={s.wrap}>
            <div className={s.left}>
              <Link className={s.logoLink} to="/" href="/">
                {/* <img src={MR_LOGO_URL} alt="Logo" /> */}
                logo here
              </Link>

              <div className={s.links}>
                <HeaderMenuItem className={cn(s.link)} to="/">
                  HOME
                </HeaderMenuItem>
                <HeaderMenuItem className={cn(s.link)} to="/page?page=1">
                  Page 1
                </HeaderMenuItem>
                <HeaderMenuItem className={s.link} to="/page?page=2">
                  Page2
                </HeaderMenuItem>
                <HeaderMenuItem className={cn(s.link, s.menu)} to="#">
                  <div id="header_wiki" className={s.menuBtn}>
                    <span>Page With Menu</span>
                    <Icon name="arrow_drop_down" className={s.dropIcon} />
                  </div>
                  <Menu target="header_wiki">
                    <HeaderMenuItem className={s.sublink} to="/">
                      <MenuItem label="Menu1" />
                    </HeaderMenuItem>
                    <HeaderMenuItem className={s.sublink} to="/">
                      <MenuItem label="Menu2" />
                    </HeaderMenuItem>
                    <HeaderMenuItem className={s.sublink} to="/">
                      <MenuItem label="Menu3" />
                    </HeaderMenuItem>
                  </Menu>
                </HeaderMenuItem>
              </div>
            </div>
            <div className={s.right}>
              right section
              {/* Desktop */}
              {/* <div className={s.rightDesktop}>
                <HeaderSearch />
                &nbsp; &nbsp;
                <Account onHideMenu={this.handleCloseSideBar} />
              </div> */}
              {/* Phone */}
              {/* <div className={s.rightPhone}>
                <IconButton
                  className={s.iconButton}
                  icon="search"
                  onClick={() => this.handleOpenHeaderSearch(true)}
                />
                <IconButton
                  className={s.iconButton}
                  onClick={this.handleOpenMenu}
                  icon="menu"
                />
              </div>
              <ReactCSSTransitionGroup
                in={isSearchOpen}
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
                <div className={s.searchMobileWrap}>
                  <div className={s.wrap}>
                    <IconButton
                      icon="arrow_back"
                      onClick={() => this.handleOpenHeaderSearch(false)}
                      className={cn(s.mobileBackButton, s.appearAnimation)}
                    />
                    <HeaderSearch
                      className={s.appearAnimation}
                      mobile
                      onCloseHeaderSearch={() =>
                        this.handleOpenHeaderSearch(false)}
                      isMobileSearchOpen={isSearchOpen}
                    />
                  </div>
                </div>
              </ReactCSSTransitionGroup>
              <SideBar
                active={isMenuOpen}
                onCloseSideBar={this.handleCloseSideBar}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
