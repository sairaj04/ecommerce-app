import "./TrendingSlider.css";
import Img2 from "../img/products/2.jpg";
import Img1 from "../img/products/1.jpg";
import Img3 from "../img/products/3.png";
import Img4 from "../img/products/4.jpg";
import Img5 from "../img/products/5.jpg";
import Img6 from "../img/products/6.jpg";
import Img7 from "../img/products/7.jpg";
import Img8 from "../img/products/8.jpg";
import TrendingItem from "./TrendingItem";

function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Trending Now</h3>
          <div className="btns">
            <button onClick={slideLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={slideRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem
            img={Img2}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img7}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img3}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img4}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img5}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img6}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img1}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
          <TrendingItem
            img={Img8}
            description="Pop-Up Toaster, White, 45cm"
            price="49$"
          />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
