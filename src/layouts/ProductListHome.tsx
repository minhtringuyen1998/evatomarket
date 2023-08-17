import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/Button";
import { VARIANTS } from "../interfaces/components";

const ProductListHome = () => {
  return (
    <Container as="section" className="container_product_list">
      <Row>
        <Col md={4}>
          <h3>
            Best Seller <span>Products</span>
          </h3>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Button type={VARIANTS.PRIMARY}>View all Products</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListHome;
