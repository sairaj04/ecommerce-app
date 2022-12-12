import "./TrendingSlider.css";

function TrendingItem({ img, price, description }) {
  return (
    <div className="row-item">
      <div className="item-header">
        <img src={img} alt="product" />
      </div>
      <div className="item-description">
        <p>{description}</p>
        <p className="item-price">{price}</p>
      </div>
    </div>
  );
}

export default TrendingItem;
