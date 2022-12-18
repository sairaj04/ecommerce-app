import { useState } from "react";
import "../components/ProductPage.css";
import Product1 from "../img/products/1.jpg";
import Product2 from "../img/products/2.jpg";
import Product3 from "../img/products/3.png";
import Product4 from "../img/products/4.jpg";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">Chair Sheepskin</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={Product1} alt="product" />
              </div>
              <div className="small-imgs">
                <img src={Product2} alt="product" />
                <img src={Product3} alt="product" />
                <img src={Product4} alt="product" />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">
                Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/
                Brass Limited Edition | We give you a special discount when you
                put this product in the basket.
              </p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">980.00$</p>
              </div>
              <div className="atc-buy">
                <button className="atc-btn">add to cart</button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
