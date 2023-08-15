import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Typo";
import { SIZE, VARIANTS } from "../interfaces/components";
import { ReactNode, useCallback, useMemo } from "react";
import { AiFillFolder, AiTwotoneTags, AiOutlineLink } from "react-icons/ai";
import "../assets/css/listtermcommon.scss";
const ListTermCommon = () => {
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
  return (
    <Container className="container-list_term">
      <Row>
        <Col className="column" xs={12} lg={4}>
          <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
            Categories
          </Text>
          <div className="list_term">
            <ul>{listMapArr(listCategories, <AiFillFolder />)}</ul>
          </div>
        </Col>
        <Col className="column" xs={12} lg={4}>
          <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
            Top Tags
          </Text>
          <div className="list_term">
            <ul>{listMapArr(listTags, <AiTwotoneTags />)}</ul>
          </div>
        </Col>
        <Col className="column" xs={12} lg={4}>
          <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
            Quick Access
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
