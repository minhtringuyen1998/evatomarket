import "../assets/css/footer.scss";
import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import InputComponent from "../components/Input";
import { VARIANTS } from "../interfaces/components";
import Button from "../components/Button";
import { HiMail } from "react-icons/hi";
import ImageLoading from "../components/ImageLazy";
import { BiLogoFacebookCircle, BiLogoTwitter } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineLink, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const listLink = [
    "Help Center",
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
    "+12 534 565 896",
    "info@xtramarket.com",
  ];
  return (
    <footer>
      <Container as="section" className="container_subscribe">
        <Row>
          <Col className="col_left">
            <h2>
              Subscribe to <span>Newsletter</span>
            </h2>
          </Col>
          <Col>
            <div className="wrapper_input">
              <InputComponent
                buttonChild={
                  <Button
                    iconPosition="left"
                    type={VARIANTS.PRIMARY}
                    icon={<HiMail />}
                    classes="custom_padding"
                  >
                    Subscribe
                  </Button>
                }
                placeholder="Enter your email"
                type={VARIANTS.PRIMARY}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container as="section" className="container_footer_content">
        <Row>
          <Col className="col left">
            <div>
              <div className="img_container">
                <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/logo-sm.png" />
              </div>
              <p>
                “Be who you are and say what you feel, because those who mind
                don't matter, and those who matter don't mind.”
              </p>
              <div className="social_icons">
                <span className="icon facebook">
                  <BiLogoFacebookCircle />
                </span>
                <span className="icon twitter">
                  <BiLogoTwitter />
                </span>
                <span className="icon instagram">
                  <AiOutlineInstagram />
                </span>
              </div>
            </div>
          </Col>
          <Col className="col middle">
            <div>
              <h4>Useful Links</h4>
              <ul>
                {listLink.map((link: string) => {
                  return (
                    <li key={`${link}`}>
                      <Link to="#">
                        <span className="wrapper_icon">
                          <AiOutlineLink />
                        </span>
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col className="col right">
            <div>
              <h4>
                Interested in a Great Way
                <p>Make Money?</p>
              </h4>
              <div className="body">
                <p>
                  A supermarket is a self-service shop offering a wide variety
                  of food, beverages and household products.{" "}
                </p>
              </div>
              <div className="wrapper_btn">
                <Button classes="center_button" type={VARIANTS.PRIMARY}>
                  Become a Seller
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container as="section" className="container_bottom">
        <Row>
          <Col className="left" md="auto">
            <p>
              With{" "}
              <span>
                {" "}
                <AiFillHeart />
              </span>{" "}
              by Nguyen Minh Tri. Copyright © 2023 Them
            </p>
          </Col>
          <Col md="auto">
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/22.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
