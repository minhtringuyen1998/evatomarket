import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Typo";
import { useState } from "react";
import { SIZE, VARIANTS } from "../interfaces/components";
import { ReactNode, useCallback, useEffect, useMemo } from "react";
import { AiFillFolder, AiTwotoneTags, AiOutlineLink } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import "../assets/css/listtermcommon.scss";
import isMobile from "../hooks/useIsMobile";
const ListTermCommon = () => {
  const [inIt, setInIt] = useState(true);
  const listCategories = [
    "Supermarket",
    "Fishes & Meats",
    "Vegetables",
    "Milks & Proteins",
    "Cleaning Tools",
    "Bestsellers",
  ];
  const listTags = ["Pasta", "Sauce", "Cowboy", "Steak", "Burgers", "Spray"];
  const listFeatures = [
    "About",
    "FAQ",
    "My account",
    "Orders",
    "Downloads",
    "Lost password",
  ];
  const listMapArr = useCallback((arr: any[], icon: ReactNode) => {
    return arr.map((i: any, index: number) => {
      return (
        <li key={`${i}_${index}`}>
          <span>{icon}</span>
          <Text type={VARIANTS.PRIMARY} size={SIZE.MEDIUM} hoverEffect>
            {i}
          </Text>
        </li>
      );
    });
  }, []);
  const handleClick = (event: any) => {
    let target = event.target as Element;
    if (target.classList.contains("show_list_term")) {
      return target.classList.remove("show_list_term");
    }
    target.classList.add("show_list_term");
  };
  useEffect(() => {
    if (isMobile() && inIt) {
      const listTargetClick = document.querySelectorAll(
        ".container-list_term .column  > p"
      );
      listTargetClick.forEach((element) => {
        element.addEventListener("click", handleClick);
      });
      setInIt(false);
    }
  }, [isMobile(), inIt]);
  return (
    <Container className="container-list_term">
      <Row>
        <Col className="column" xs={12} lg={4}>
          <Text
            key={"categories"}
            classes="categories"
            type={VARIANTS.SUCCESS}
            size={SIZE.MEDIUM}
          >
            Categories
            {isMobile() && (
              <span className="arrow_down">
                <BiChevronDown />
              </span>
            )}
          </Text>

          <div className="list_term">
            <ul>{listMapArr(listCategories, <AiFillFolder />)}</ul>
          </div>
        </Col>
        <Col className="column" xs={12} lg={4}>
          <Text
            key={"top_tags"}
            classes="top_tags"
            type={VARIANTS.SUCCESS}
            size={SIZE.MEDIUM}
          >
            Top Tags
            {isMobile() && (
              <span className="arrow_down">
                <BiChevronDown />
              </span>
            )}
          </Text>

          <div className="list_term">
            <ul>{listMapArr(listTags, <AiTwotoneTags />)}</ul>
          </div>
        </Col>
        <Col className="column" xs={12} lg={4}>
          <Text
            key={"quick_access"}
            classes="quick_access"
            type={VARIANTS.SUCCESS}
            size={SIZE.MEDIUM}
          >
            Quick Access
            {isMobile() && (
              <span className="arrow_down">
                <BiChevronDown />
              </span>
            )}
          </Text>

          <div className="list_term">
            <ul>{listMapArr(listFeatures, <AiOutlineLink />)}</ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ListTermCommon;
