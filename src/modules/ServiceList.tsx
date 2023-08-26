import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Typo";
import { SIZE, VARIANTS } from "../interfaces/components";
import ImageLoading from "../components/ImageLazy";
import "../assets/css/servicelist.scss";
const ServiceList = (props: any) => {
  return (
    <Container fluid="lg" className="container_services">
      <Row>
        <Col xs={12} sm={12} md={5} lg={2} className="service_item  ">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.PRIMARY} size={SIZE.XLARGE}>
              {" "}
              Fishes &amp; Raw Meats{" "}
            </Text>
            <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
              20% OFF
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={2} className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s2.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.PRIMARY} size={SIZE.XLARGE}>
              {" "}
              Fruits &amp; Vegetables{" "}
            </Text>
            <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
              20% OFF
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={2} className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s3.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.PRIMARY} size={SIZE.XLARGE}>
              {" "}
              Breads &amp; Sweats{" "}
            </Text>
            <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
              50% OFF
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={2} className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s4.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.PRIMARY} size={SIZE.XLARGE}>
              {" "}
              Milk &amp; Proteins{" "}
            </Text>
            <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
              40% OFF
            </Text>
          </div>
        </Col>
        <Col xs={12} sm={12} md={5} lg={2} className="service_item">
          <div className="img_container">
            <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s6.png" />
          </div>
          <div className="content">
            <Text type={VARIANTS.PRIMARY} size={SIZE.XLARGE}>
              {" "}
              Ready touse Foods
            </Text>
            <Text type={VARIANTS.SUCCESS} size={SIZE.MEDIUM}>
              45% OFF
            </Text>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceList;
