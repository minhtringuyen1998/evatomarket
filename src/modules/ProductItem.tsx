import { Row, Col } from "react-bootstrap";
import "../assets/css/productitem.scss";
import ImageLoading from "../components/ImageLazy";
import { IProductProps, VARIANTS } from "../interfaces/components";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { ReactNode, useCallback } from "react";
import Button from "../components/Button";
const ProductItem = (props: IProductProps) => {
  const {
    addToCart,
    addToWishList,
    imgUrl,
    title,
    discountPrice,
    saleOff,
    price,
    currency,
    stars,
  } = props;
  const randomId = () => {
    return (Math.random() * 10)
      .toString(36)
      .slice(0, Math.floor(Math.random() * 100))
      .replace(".", "");
  };
  const renderStars = useCallback((stars: number): ReactNode => {
    let arrSolidStar = Array(stars).fill(
      <AiTwotoneStar className="solid_star" />
    );
    return stars < 5
      ? arrSolidStar.concat(
          Array(5 - stars).fill(<AiOutlineStar className="outline_star" />)
        )
      : arrSolidStar;
  }, []);
  const renderPrice = useCallback((priceNumber: string): string => {
    return `${currency}${priceNumber}.00`;
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
        <div className="wrap_btn_icon">
          <AiOutlineSearch className="icon" />
          <span className="btn quick_view">Quick view</span>
        </div>
      </div>
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
        <Button type={VARIANTS.PRIMARY} load={1000}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};
export default ProductItem;
