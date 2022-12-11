import "./Home.css";
import Main1 from "../img/home-img-1.jpg";
import Main2 from "../img/home-img-2.jpg";
import Main3 from "../img/home-img-3.jpg";
import Main4 from "../img/home-img-4.jpg";
import { useState } from "react";

function Main() {
  const [overlay, setOverlay] = useState(false);

  function inOverlay() {
    setOverlay(true);
  }

  function outOverlay() {
    setOverlay(false);
  }

  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <div
                id="1"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Main1} alt="img1" />
              <p className="main-description">Live Comfortably</p>
            </div>
            <div className="featured grid-two">
              <div
                id="2"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Main2} alt="img2" />
              <p className="main-description">Skincare</p>
            </div>
            <div className="featured grid-four">
              <div
                id="3"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Main3} alt="img3" />
              <p className="main-description">Kitchen</p>
            </div>
            <div className="featured grid-four-low">
              <div
                id="4"
                className={overlay ? "hard-overlay" : "lil-overlay"}
                onMouseEnter={inOverlay}
                onMouseLeave={outOverlay}
              ></div>
              <img src={Main4} alt="img4" />
              <p className="main-description">Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
