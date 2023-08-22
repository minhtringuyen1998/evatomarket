import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/Button";
import { IProduct, VARIANTS } from "../interfaces/components";
import "../assets/css/productlisthome.scss";
import { listProduct } from "../data/dataProducts";
import ProductItem from "../modules/ProductItem";
import TextUnderline from "../components/TextUnderline";
const ProductListHome = () => {
  return (
    <Container as="section" className="container_product_list">
      <Row className="product_list_header">
        <Col md={4}>
          <h2>
            Best Seller <TextUnderline>Products</TextUnderline>
          </h2>
        </Col>
        <Col md={{ span: "auto", offset: 6 }}>
          <Button type={VARIANTS.PRIMARY}>View all Products</Button>
        </Col>
      </Row>
      <div className="product_list_body">
        {listProduct.slice(0, 8).map((product: IProduct, index: number) => {
          return (
            <ProductItem
              key={`${product.title}_${index}`}
              addToWishList={() => {
                console.log("add to wish list");
              }}
              {...product}
              onViewDetail={() => console.log("view detail")}
              addToCart={() => {
                console.log("addToCart");
              }}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ProductListHome;
