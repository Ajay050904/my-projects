import React from "react";
import "./Navbar.css"; 


const Navbar = ({logo}) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Furniro Logo" className="logo-icon" />
          <span className="logo-text">ByteBooks</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Action Icons */}
        <div className="nav-icons">
          <a href="#profile" className="icon">
            <i className="fa fa-user"></i>
          </a>
          <a href="#search" className="icon">
            <i className="fa fa-search"></i>
          </a>
          <a href="#wishlist" className="icon">
            <i className="fa fa-heart"></i>
          </a>
          <a href="#cart" className="icon">
            <i className="fa fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;