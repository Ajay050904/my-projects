import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Policies</h4>
          <ul>
            <li><a href="/privacy">Privacy Policies</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/secure-shopping">Secure Shopping</a></li>
            <li><a href="/copyright">Copyright Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Help</h4>
          <ul>
            <li><a href="/payment">Payment</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/return">Return</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Misc</h4>
          <ul>
            <li><a href="/affiliate">Affiliate</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram"></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook"></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter"></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"></a>
          {/* <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon pinterest"></a> */}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube"></a>
        </div>
        <p>Copyright © 2025 . ByteBooks.com . All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
