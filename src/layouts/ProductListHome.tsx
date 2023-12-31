import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/Button";
import { IProduct, VARIANTS } from "../interfaces/components";
import "../assets/css/productlisthome.scss";
import { listProduct } from "../data/dataProducts";
import ProductItem from "../modules/ProductItem";
import TextUnderline from "../components/TextUnderline";
import { useDispatch } from "react-redux";
import { open } from "../reducer/modalSlice";
import { MODAL_NAME } from "../enum";
import { AppDispatch } from "../store";
const ProductListHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Container as="section" className="container_product_list">
        <Row className="product_list_header">
          <Col xs="7" md={4}>
            <h2>
              Best Seller <TextUnderline>Products</TextUnderline>
            </h2>
          </Col>
          <Col xs="auto" md={{ span: "auto", offset: 6 }}>
            <Button type={VARIANTS.PRIMARY}>View all Products</Button>
          </Col>
        </Row>
        <div className="product_list_body">
          {listProduct.slice(0, 8).map((product: IProduct, index: number) => {
            return (
              <ProductItem
                onViewDetail={(product: IProduct) => {
                  dispatch(
                    open({
                      name: MODAL_NAME.MODAL_REVIEW_PRODUCT,
                      data: product,
                    })
                  );
                }}
                key={`${product.title}_${index}`}
                productInfo={product}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default ProductListHome;
