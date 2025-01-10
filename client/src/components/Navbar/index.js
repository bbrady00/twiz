import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/button.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <section className="navbar">
      <div className="logo">
        <h1>Your Logo</h1>
      </div>
      <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </section>
  );
};

export default Navbar;
