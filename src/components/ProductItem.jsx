import "./ProudProducts.css";

function ProductItem({ img, description, price }) {
  return (
    <>
      <div className="product normal">
        <div className="product-header">
          <img src={img} alt="product1" />
        </div>
        <div className="product-details">
          <p>{description}</p>
          <p className="item-price">{price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
