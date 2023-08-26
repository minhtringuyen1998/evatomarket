import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/navmenu.scss";
import { NavLink } from "react-router-dom";
import Text from "../components/Typo";
import { SIZE, VARIANTS } from "../interfaces/components";
import { CiPercent } from "react-icons/ci";
import Button from "../components/Button";
import { AiFillGift, AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import ServiceList from "../modules/ServiceList";
import ListTermCommon from "../modules/ListTermCommon";
import clsx from "clsx";
import isMobile from "../hooks/useIsMobile";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const NavMenu = (props: {
  showMenuResponsive: boolean;
  onCloseMenu: () => void;
}) => {
  const { showMenuResponsive, onCloseMenu = () => {} } = props;
  const [showDropDownQuickFind, setShowDropDownQuickFind] = useState(false);
  const [showDropDownSpecialOffer, setShowDropDownSpecialOffer] =
    useState(false);
  return (
    <>
      <nav className={clsx(isMobile() && showMenuResponsive && "show_menu")}>
        <Container className={clsx("block_menu")}>
          <Row>
            <Col className="nav-menu_item" xs={12} sm="auto">
              <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                  isActive ? "active menu_item" : "menu_item"
                }
              >
                <span className="icon-basket"></span>
                <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                  New Products
                </Text>
              </NavLink>
            </Col>
            <Col className="nav-menu_item" xs={12} sm="auto">
              <NavLink
                to="#"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending menu_item "
                    : isActive
                    ? "active menu_item"
                    : "menu_item"
                }
              >
                <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                  Best Sales
                </Text>
                <span className="hot_badge">Hot</span>
              </NavLink>
            </Col>
            <Col className="nav-menu_item" xs={12} sm="auto">
              <NavLink
                to="#"
                className="menu_item"
                onClick={() => {
                  isMobile() &&
                    setShowDropDownSpecialOffer(!showDropDownSpecialOffer);
                }}
              >
                <p>
                  <CiPercent size={25} style={{ marginRight: "5px" }} />
                  Special Offers
                </p>
                <div className="arrow_down">
                  {isMobile() ? <BiChevronDown /> : <AiFillCaretDown />}
                </div>
              </NavLink>
              <div
                className={clsx(
                  "special_offer_dropdown",
                  isMobile() &&
                    showDropDownSpecialOffer &&
                    "show_offer_dropdown"
                )}
              >
                <ServiceList />
              </div>
            </Col>
            <Col className="nav-menu_item" xs={12} sm="auto">
              <NavLink
                to="#"
                className={({ isActive, isPending }) =>
                  isActive ? "active menu_item" : "menu_item"
                }
                onClick={() => {
                  isMobile() &&
                    setShowDropDownQuickFind(!showDropDownQuickFind);
                }}
              >
                <p>Quick Find</p>
                <div className="arrow_down">
                  {isMobile() ? <BiChevronDown /> : <AiFillCaretDown />}
                </div>
              </NavLink>
              <div
                className={clsx(
                  "quick_find_dropdown",
                  isMobile() && showDropDownQuickFind && "show_quick_find"
                )}
              >
                <ListTermCommon />
              </div>
            </Col>
            <Col className="nav-menu_item" xs={12} sm="auto">
              <NavLink to="#" className="menu_item">
                <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                  New
                </Text>
              </NavLink>
            </Col>
            <Col className="nav-menu_item" xs={12} sm="auto">
              <NavLink to="#" className="menu_item">
                <Text size={SIZE.MEDIUM} type={VARIANTS.PRIMARY}>
                  Contact
                </Text>
              </NavLink>
            </Col>
            <Col className="nav-menu_item button_daily" xs={12} lg sm="auto">
              <Button type={VARIANTS.PRIMARY} icon={<AiFillGift />}>
                Daily Offer
              </Button>
            </Col>
          </Row>
        </Container>
      </nav>
      <div className="layer_background"></div>
      <div className="wrapper_icon_close" onClick={() => onCloseMenu()}>
        <AiOutlineClose />
      </div>
    </>
  );
};
export default NavMenu;
