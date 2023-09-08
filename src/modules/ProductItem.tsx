import { Row, Col } from "react-bootstrap";
import "../assets/css/productitem.scss";
import React from "react";
import ImageLoading from "../components/ImageLazy";
import { IProductProps, VARIANTS } from "../interfaces/components";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ReactNode, useCallback } from "react";
import Button from "../components/Button";
import { randomId, renderPrice } from "../utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addToCart } from "../reducer/cartSlice";
const ProductItem = (props: IProductProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { onViewDetail, productInfo } = props;
  const { imgUrl, title, discountPrice, saleOff, price, currency, stars } =
    productInfo;
  const handleAddToCart = useCallback(() => {
    dispatch(addToCart({ product: productInfo }));
  }, [props.productInfo]);
  const renderStars = useCallback((stars: number): ReactNode => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      let keyItem = `${randomId()}`;
      if (stars >= i + 1) {
        result.push(<AiTwotoneStar key={keyItem} className="solid_star" />);
      } else {
        result.push(<AiOutlineStar key={keyItem} className="outline_star" />);
      }
    }
    return result;
  }, []);

  return (
    <div className="product_container">
      <div className="img_container">
        <ImageLoading dataSrc={imgUrl} />
      </div>
      <div className="wrapper_buttons_icon">
        <div className="wrap_btn_icon">
          <AiOutlineHeart className="icon" />
          <span className="btn wish_list">Add to wish list</span>
        </div>
        <div
          className="wrap_btn_icon"
          onClick={() => {
            // onViewDetail(productInfo);
          }}
        >
          <AiOutlineSearch className="icon" />
          <span className="btn quick_view">Quick view</span>
        </div>
      </div>
      {saleOff && (
        <div className="sale_off">
          <b>Sale!</b>
        </div>
      )}
      <div className="product_info">
        <h2>{title}</h2>
        <Row>
          {stars && (
            <Col className="wrapper-star" md={6} lg="auto">
              {renderStars(stars)}
            </Col>
          )}
          <Col md={6} lg="auto">
            {discountPrice && (
              <del className="discount_price">{renderPrice(discountPrice)}</del>
            )}
            <span className="price">{renderPrice(price)}</span>
          </Col>
        </Row>
      </div>
      <div className="btn_add_to_cart">
        <Button
          type={VARIANTS.PRIMARY}
          load={1000}
          icon={<FaShoppingCart />}
          iconPosition="left"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
export default React.memo(ProductItem);
