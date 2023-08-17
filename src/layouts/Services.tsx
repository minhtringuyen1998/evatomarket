import { Container, Row, Col } from "react-bootstrap";
import ImageLoading from "../components/ImageLazy";
import Text from "../components/Typo";
import { SIZE, VARIANTS } from "../interfaces/components";
import "../assets/css/services.scss";
const Services = () => {
  return (
    <Container className="container_services_menu">
      <Row>
        <Col>
          <div className="service">
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-1.png" />
            </div>
            <div className="content">
              <Text size={SIZE.MEDIUM} type={VARIANTS.DARK}>
                Free Shipping
              </Text>
              <p className="subtitle">On all orders over $50.00</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="service">
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-2.png" />
            </div>
            <div className="content">
              <Text size={SIZE.MEDIUM} type={VARIANTS.DARK}>
                Return for free
              </Text>
              <p className="subtitle">Returns are free 3 days</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="service">
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-3.png" />
            </div>
            <div className="content">
              <Text size={SIZE.MEDIUM} type={VARIANTS.DARK}>
                Secure Payment
              </Text>
              <p className="subtitle">Your payment 100% safe</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="service">
            <div className="img_container">
              <ImageLoading dataSrc="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-4.png" />
            </div>
            <div className="content">
              <Text size={SIZE.MEDIUM} type={VARIANTS.DARK}>
                24/7 Support
              </Text>
              <p className="subtitle">Contact us anytime want</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
