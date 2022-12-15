import "./Header.css";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";

function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <div id="img1" className="lil-overlay"></div>
              <img src={Main1} alt="img1" />
              <p className="main-description">Live Comfortably</p>
            </div>
            <div className="featured grid-two">
              <div id="img2" className="lil-overlay"></div>
              <img src={Main2} alt="img2" />
              <p className="main-description">Skincare</p>
            </div>
            <div className="featured grid-four">
              <div id="img3" className="lil-overlay"></div>
              <img src={Main3} alt="img3" />
              <p className="main-description">Kitchen</p>
            </div>
            <div className="featured grid-four-low">
              <div id="img4" className="lil-overlay"></div>
              <img src={Main4} alt="img4" />
              <p className="main-description">Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
