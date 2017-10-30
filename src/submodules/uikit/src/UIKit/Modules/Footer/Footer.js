import React, { PureComponent } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Container, Row, Col } from "../GridSystem";
import Link from "../../Elements/Link";
import SocialIcons from "./SocialIcons.js";

import logoUrl from "../../svg/logo_footer.svg";
import getappBtnUrl from "../../svg/getapp_btn_footer.svg";

import s from "./Footer.scss";

const COPYRIGHT = "© Not A Basement Studio";

class Footer extends PureComponent {
  render() {
    return (
      <div className={s.root} {...this.props}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={s.desktop}>
                <div className={s.left}>
                  <img src={logoUrl} alt="Manga Rock Logo" />
                  <div className={s.btnWrap}>
                    <div className={s.text}>Get Manga Rock FREE App</div>
                    <Link to="#">
                      <img src={getappBtnUrl} alt="Get Manga Rock Free App" />
                    </Link>
                  </div>
                </div>
                <div className={s.right}>
                  <div className={s.links}>
                    <Link className={s.link} to="#">
                      About us
                    </Link>
                    <Link className={s.link} to="#">
                      Privacy
                    </Link>
                    <Link className={s.link} to="#">
                      Disclaimer
                    </Link>
                    <Link className={s.link} to="#">
                      Terms of Service
                    </Link>
                    <Link className={s.link} to="#">
                      Customer Support
                    </Link>
                  </div>
                  <div className={s.socialIcons}>
                    <SocialIcons />
                  </div>
                  <div className={s.copyright}>
                    {COPYRIGHT}
                  </div>
                </div>
              </div>

              <div className={s.phone}>
                {COPYRIGHT}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
