import { Link } from "react-router-dom";
import "../components/ProudProducts.css";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import CategoriesItem from "../components/CategoriesItem";

function Categories() {
  const filterCategory = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i> Home
          </Link>
          <h3>all</h3>

          <select name="category" onChange={filterCategory}>
            <option value="all">All</option>
            <option value="forniture">Forniture</option>
            <option value="electronics">Electronics</option>
            <option value="lamps">Lamps</option>
            <option value="kitchen">Kitchen</option>
            <option value="chairs">Chairs</option>
            <option value="skin-care">Skin Care</option>
          </select>
        </div>
      </div>

      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            <CategoriesItem />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Categories;
