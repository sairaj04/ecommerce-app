import "./Banner.css";

function BannerReverse({ title, text, img }) {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container-reverse">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <button>Shop now</button>
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerReverse;
