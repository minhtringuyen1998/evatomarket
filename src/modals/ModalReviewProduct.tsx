import { Modal } from "react-bootstrap";
import { IModal, IProduct, VARIANTS } from "../interfaces/components";
import { Row, Col } from "react-bootstrap";
import ImageZoom from "../components/ImageZoom";
import { AiTwotoneStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiCopy } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { ReactNode, useCallback } from "react";
import { randomId } from "../utils";
import InputComponent from "../components/Input";
import Button from "../components/Button";
import "../assets/css/modalreviewproduct.scss";
interface IModalReviewProduct extends IModal {
  productInfo: IProduct;
}
const ModalReviewProduct = (props: IModalReviewProduct) => {
  const { show, onHide = () => {}, backdrop = false, productInfo } = props;
  const { imgUrl, title, stars, saleOff, price, discountPrice } = productInfo;
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
    <Modal
      dialogClassName="modal-width"
      show={show}
      centered
      onHide={onHide}
      keyboard={true}
    >
      <section className="container_modal-review-product">
        <Row>
          <Col xs={6}>
            <ImageZoom imgUrl={imgUrl} />
          </Col>
          <Col xs={6}>
            <div className="modal_left">
              <h3>{title}</h3>
              {stars && (
                <div className="wrapper_stars">{renderStars(stars)}</div>
              )}
              <p className="description">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
              <Row className="counter">
                <Col>
                  <div className="btn minus">
                    <span>-</span>
                  </div>
                  <div className="input">
                    <InputComponent type={VARIANTS.LIGHT} onChange={() => {}} />
                  </div>
                  <div className="btn add">
                    <span>+</span>
                  </div>
                </Col>
              </Row>
              <Row className="btn_container">
                <Button type={VARIANTS.PRIMARY} onClick={() => {}}>
                  Add to cart
                </Button>
                <Button type={VARIANTS.PRIMARY} onClick={() => {}}>
                  <AiOutlineHeart />
                </Button>
              </Row>
              <p>
                <span>Categories: </span>Breads & Sweats, Supermarket
              </p>
              <p>
                <span>Tags: </span>Care, Colour, Dove
              </p>
              <div className="share_container">
                <Col>
                  <span>Share</span>
                </Col>
                <Col>
                  <span className="icon fb">
                    <BiLogoFacebook />
                  </span>
                  <span className="icon twitter">
                    <BiLogoTwitter />
                  </span>
                  <span className="icon mail">
                    <IoMdMail />
                  </span>
                  <span className="icon ">
                    <BiCopy />
                  </span>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Modal>
  );
};

export default ModalReviewProduct;
