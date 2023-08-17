import { useCallback, useState } from "react";
import "../assets/css/header.scss";
import ImageLoading from "../components/ImageLazy";
import InputComponent from "../components/Input";
import { SIZE, VARIANTS } from "../interfaces/components";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPhoneCall, FiHeart } from "react-icons/fi";
import Text from "../components/Typo";
import CartList from "../modules/CartList";
import { Row, Container, Col } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const hanldeChange = (val: any) => {
    setTextSearch(val);
  };
  const handleShowCartList = useCallback(() => {
    if (show) return;
    setShow(true);
  }, []);
  const removeCartList = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <header id="header-container">
      <Container className="content">
        <Row>
          <Col className="header_left" xs={7}>
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/logo-sm.png" />
              <div className="line">
                <div className="header_line_2">&nbsp;</div>
              </div>
            </div>
            <div className="input-search_container">
              <InputComponent
                icon={<AiOutlineSearch />}
                type={VARIANTS.LIGHT}
                onChange={hanldeChange}
                placeholder="What are you looking for?"
              />
            </div>
          </Col>
          <Col className="header_right">
            <a className="block-contact" href="tel:0984234352">
              <div className="icon_wrapper">
                <FiPhoneCall className="icon" />
              </div>
              <div className="text">
                <Text size={SIZE.SMALL} type={VARIANTS.SECONDARY}>
                  Call Center
                </Text>
                <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                  0984234352
                </Text>
              </div>
            </a>
            <div
              className="icon_wrapper"
              onMouseOver={handleShowCartList}
              onMouseOut={removeCartList}
            >
              <span className="icon icon-basket"></span>
              <span className="quality_product">2</span>
              <CartList show={show} />
            </div>
            <div className="line">
              <div className="header_line_2">&nbsp;</div>
            </div>
            <div className="icon_wrapper icon-heart">
              <FiHeart className="icon" />
            </div>

            <div className="icon_wrapper  icon-menu">
              <AiOutlineMenu className="icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
