import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/advertisementmobileapp.scss";
import ImageLoading from "../components/ImageLazy";
const AdvertisementMobileApp = () => {
  return (
    <Container as="section" className="container_advertisement_mobile_app">
      <Row>
        <Col xs={12} lg={6} className="banner_left">
          <h2 className="title_banner">XtraSupermarket</h2>
          <p className="sub-title_banner">Fresher than Ever</p>
          <p className="content_banner">
            A supermarket is a self-service shop offering a wide variety of
            food, beverages and household products, organized into sections.
          </p>
          <div className="btn_banner_container">
            <div className="btn">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/btn2.png" />
            </div>
            <div className="btn">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/btn-1.png" />
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} className="banner_right">
          <div className="img_container"></div>
        </Col>
      </Row>
    </Container>
  );
};
export default AdvertisementMobileApp;
