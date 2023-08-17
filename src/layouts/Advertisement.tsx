import { Container } from "react-bootstrap";
import "../assets/css/advertisement.scss";
import Button from "../components/Button";
import { VARIANTS } from "../interfaces/components";
import { AiOutlineArrowRight } from "react-icons/ai";

const AdvertisementHome = () => {
  return (
    <section className="container_advertisement">
      <Container>
        <div className="advertisement_gallery">
          <div className="advertisement">
            <p>50% OFF</p>
            <p>
              <b>Sauces</b>
            </p>
          </div>
          <div className="advertisement">
            <p>50% OFF</p>
            <p>
              <b>All Chips</b>
            </p>
          </div>
          <div className="advertisement">
            <p>50% OFF</p>
            <p>
              <b>Full Fresh Vegetable</b>
            </p>
            <Button
              classes="btn_hover_custom"
              type={VARIANTS.SECONDARY}
              icon={<AiOutlineArrowRight />}
            >
              SHOP NOW
            </Button>
          </div>
          <div className="advertisement">
            <p>50% OFF</p>
            <p>
              <b>Sale 58% Off All Fruit Products</b>
            </p>
            <Button
              classes="btn_hover_custom"
              type={VARIANTS.PRIMARY}
              icon={<AiOutlineArrowRight />}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AdvertisementHome;
