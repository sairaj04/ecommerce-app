import { items } from "./AllData";

function CategoriesItem() {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="product normal">
          <div className="product-header">
            <img src={item.img} alt="product1" />
          </div>
          <div className="product-details">
            <p>{item.description}</p>
            <p className="item-price">{item.price}$</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoriesItem;
