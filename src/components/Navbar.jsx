import "./Navbar.css";
import LogoImg from "../img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import EmptyCart from "../img/cart/empty-cart.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <i
          onClick={() => setMobileNav(!mobileNav)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link to="/categories">categories</Link>
          <Link to="/">lamps</Link>
          <Link to="/">furniture</Link>
        </div>
      </div>

      <div
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2>Your Shopping Cart (0 items)</h2>
          <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
        </div>
        <div className="cart-body">
          <div className="empty-cart">
            <img src={EmptyCart} alt="cart image" />
            <p>Your cart is empty</p>
            <button onClick={openCart}>Keep Browsing</button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src={LogoImg}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link to="/categories">categories</Link>
              <Link to="/">lamps</Link>
              <Link to="/">furniture</Link>
              <i onClick={openCart} className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="hamburger-menu">
              <i
                onClick={openCart}
                className="fa-solid fa-cart-shopping hamburger-cart"
              ></i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
