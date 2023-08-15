import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/navmenu.scss";
import { NavLink } from "react-router-dom";
import Text from "../components/Typo";
import { SIZE, VARIANTS } from "../interfaces/components";
import { CiPercent } from "react-icons/ci";
import Button from "../components/Button";
import { AiFillGift, AiFillCaretDown } from "react-icons/ai";
import ImageLoading from "../components/ImageLazy";
import ServiceList from "../modules/ServiceList";
import ListTermCommon from "../modules/ListTermCommon";
const NavMenu = () => {
  return (
    <nav>
      <Container fluid className="block_menu">
        <Row>
          <Col className="nav-menu_item">
            <NavLink to="#" className="menu_item">
              <span className="icon-basket"></span>
              <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                New Products
              </Text>
            </NavLink>
          </Col>
          <Col className="nav-menu_item" xl="auto">
            <NavLink to="#" className="menu_item">
              <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                Best Sales
              </Text>
              <span className="hot_badge">Hot</span>
            </NavLink>
          </Col>
          <Col className="nav-menu_item" xl="auto">
            <NavLink to="#" className="menu_item">
              <CiPercent size={25} />
              <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                Special Offers
              </Text>
              <div className="arrow_down">
                <AiFillCaretDown color="#7A7A7A" />
              </div>
              <div className="special_offer_dropdown">
                <ServiceList />
              </div>
            </NavLink>
          </Col>
          <Col className="nav-menu_item" xl="auto">
            <NavLink to="#" className="menu_item">
              <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                Quick Find
              </Text>
              <div className="arrow_down">
                <AiFillCaretDown color="#7A7A7A" />
              </div>
              <div className="quick_find_dropdown">
                <ListTermCommon />
              </div>
            </NavLink>
          </Col>
          <Col className="nav-menu_item" xl="auto">
            <NavLink to="#" className="menu_item">
              <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                New
              </Text>
            </NavLink>
          </Col>
          <Col className="nav-menu_item" xl="auto">
            <NavLink to="#" className="menu_item">
              <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                Contact
              </Text>
            </NavLink>
          </Col>
          <Col className="nav-menu_item button_daily">
            <Button type={VARIANTS.PRIMARY} icon={<AiFillGift />}>
              Daily Offer
            </Button>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
export default NavMenu;
