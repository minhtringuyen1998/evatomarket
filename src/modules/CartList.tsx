import Text from "../components/Typo";
import {
  ICartList,
  IProductCart,
  SIZE,
  VARIANTS,
} from "../interfaces/components";
import "../assets/css/cartlist.scss";

import clsx from "clsx";
import { useMemo } from "react";
import { renderPrice } from "../utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { removeFromCart } from "../reducer/cartSlice";
interface IItemCart extends IProductCart {
  onDelete: (param: string) => void;
}
const ItemCart = (props: IItemCart) => {
  const { title, price, quantity, imgUrl, onDelete = () => {} } = props;
  return (
    <div className="item_small">
      <a href="#" className="img_link">
        <img src={imgUrl} className="cart_img_product" alt="" />{" "}
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
              {title}
            </Text>
          </a>
        </h3>
        <div className="cart_list_product_quantity">
          {quantity} x <span className=" amount">{renderPrice(price)}</span>{" "}
        </div>
        <div className="remove" onClick={() => onDelete(title)}>
          x
        </div>
      </div>
    </div>
  );
};
const CartList = (props: ICartList) => {
  const { listProduct, show, totalPrice } = props;
  const dispatch = useDispatch<AppDispatch>();
  const handleDeletItem = (title: string) => {
    dispatch(removeFromCart(title));
  };
  const listProductData = useMemo(() => {
    {
      return listProduct.map((item: IProductCart, index: number) => {
        return (
          <ItemCart
            onDelete={handleDeletItem}
            {...item}
            key={`${item.title}_${index}`}
          />
        );
      });
    }
  }, [listProduct]);
  return (
    <div
      className={clsx(
        "cart_products_hidden",
        show && "cart_products_visibility"
      )}
    >
      {listProduct.length !== 0 ? (
        <>
          <div className="products">{listProductData}</div>
          <div className="btn-cart_container">
            <button>Cart {renderPrice(totalPrice)}</button>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <span>No products in cart</span>
      )}
    </div>
  );
};

export default CartList;
