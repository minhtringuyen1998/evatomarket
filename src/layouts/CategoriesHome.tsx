import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/categorieshome.scss";
import ImageLoading from "../components/ImageLazy";
import Text from "../components/Typo";
import { SIZE, VARIANTS } from "../interfaces/components";
import TextUnderline from "../components/TextUnderline";
const CategoriesHome = () => {
  return (
    <Container as="section" className="container-categories_home">
      <h2>
        Discover Our {""}
        <TextUnderline>Categories</TextUnderline>
      </h2>
      <Row fluid="xs">
        <Col xs={12} sm={5} lg xl className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.DARK} size={SIZE.MEDIUM}>
              {" "}
              Fishes &amp; Raw Meats{" "}
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={5} lg xl className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s2.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.DARK} size={SIZE.MEDIUM}>
              {" "}
              Fruits &amp; Vegetables{" "}
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={5} lg xl className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s3.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.DARK} size={SIZE.MEDIUM}>
              {" "}
              Breads &amp; Sweats{" "}
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={5} lg xl className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s4.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.DARK} size={SIZE.MEDIUM}>
              {" "}
              Milk &amp; Proteins{" "}
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={5} lg xl className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s6.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.DARK} size={SIZE.MEDIUM}>
              {" "}
              Ready touse Foods
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={5} lg xl className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s5.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.DARK} size={SIZE.MEDIUM}>
              {" "}
              Cleaning Materials
            </Text>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CategoriesHome;
