import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function CartWithItems({ id }) {
  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          <CartItem id={id} />
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">1000$</p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
