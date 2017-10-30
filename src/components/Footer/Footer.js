import React, { PureComponent } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import {
  Container,
  Row,
  Col,
} from "../../submodules/uikit/src/UIKit/Modules/GridSystem";
import Link from "../../submodules/uikit/src/UIKit/Elements/Link";
import SocialIcons from "./SocialIcons.js";

// import logoUrl from "./svg/logo_footer.svg";
import getappBtnUrl from "./svg/getapp_btn_footer.svg";

import s from "./Footer.scss";

class Footer extends PureComponent {
  render() {
    return (
      <div className={s.root} {...this.props}>
        <div className={s.wrap}>
          <Container>
            <Row>
              <Col xs={12}>
                <div className={s.desktop}>
                  <div className={s.left}>
                    {/* <img src={logoUrl} alt="Manga Rock Logo" /> */}
                    logo
                    <div className={s.btnWrap}>
                      <div className={s.text}>Footer notice mess here</div>
                    </div>
                  </div>
                  <div className={s.right}>
                    right section
                    <div className={s.links}>
                      <Link className={s.link} to="/">
                        Link 1
                      </Link>
                      <Link className={s.link} to="/">
                        Link 2
                      </Link>
                      <Link className={s.link} to="/">
                        Link 3
                      </Link>
                      <Link className={s.link} external to="/">
                        Link external
                      </Link>
                    </div>
                    <div className={s.socialIcons}>
                      <SocialIcons />
                    </div>
                    <div className={s.copyright}>{"COPYRIGHT"}</div>
                  </div>
                </div>
                <div className={s.phone}>{"COPYRIGHT"}</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
