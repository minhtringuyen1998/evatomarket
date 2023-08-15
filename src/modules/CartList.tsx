import Text from "../components/Typo";
import { ICartList, SIZE, VARIANTS } from "../interfaces/components";
import "../assets/css/cartlist.scss";

import clsx from "clsx";
import { useMemo } from "react";
const ItemCart = (props: any) => {
  return (
    <div className="item_small">
      <a href="#" className="img_link">
        <img
          src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr9-600x600.jpg"
          className="cart_img_product"
          alt=""
        />{" "}
      </a>
      <div className="cart_list_product_title">
        <h3>
          <a href="https://xtratheme.com/elementor/supermarket/product/dolmio-pasta-sauce/">
            <Text
              size={SIZE.MEDIUM}
              type={VARIANTS.DARK}
              hoverEffect
              disableTransition
            >
              Dolmio Pasta Sauce Vita
            </Text>
          </a>
        </h3>
        <div className="cart_list_product_quantity">
          1 x{" "}
          <span className=" amount">
            <span className="symbol">$</span>
            22.00
          </span>{" "}
        </div>
        <div className="remove">x</div>
      </div>
    </div>
  );
};
const CartList = (props: ICartList) => {
  const { onRemoveItem, onCheckOut, listProduct, show } = props;
  const listProductData = useMemo(() => {
    {
      return Array.from(
        [1, 2, 3]
          .fill(1)
          .map((item: any, index: number) => <ItemCart key={`${index}`} />)
      );
    }
  }, [listProduct]);
  return (
    <div
      className={clsx(
        "cart_products_hidden",
        show && "cart_products_visibility"
      )}
    >
      <div className="products">{listProductData}</div>
      <div className="btn-cart_container">
        <button>Cart 87$</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartList;
