import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import { VARIANTS } from "../interfaces/components";
import "../assets/css/bannerhomepage.scss";
import ImageLoading from "../components/ImageLazy";
const BannerHomePage = () => {
  return (
    <section className="banner_container">
      <Container>
        <Row>
          <Col xs={12} lg={6} className="banner_left">
            <h2 className="title_banner">XtraSupermarket</h2>
            <p className="sub-title_banner">Fresher than Ever</p>
            <p className="content_banner">
              A supermarket is a self-service shop offering a wide variety of
              food, beverages and household products, organized into sections.
            </p>
            <div className="btn_banner_container">
              <Button type={VARIANTS.SECONDARY}>25% Off Festival</Button>
              <Button type={VARIANTS.SECONDARY_OUTLINE}>Discover Shop</Button>
            </div>
          </Col>
          <Col xs={12} lg={6} className="banner_right">
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/model-1.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default BannerHomePage;
