import "./Navbar.css";
import LogoImg from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <Link to="/">
              <img src={LogoImg} alt="logo" className="logo-img" />
            </Link>
            <div className="nav-links">
              <Link to="/">categories</Link>
              <Link to="/">lamps</Link>
              <Link to="/">furniture</Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
