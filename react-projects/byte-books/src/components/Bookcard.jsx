import React from "react";
import "./Bookcard.css";
// import bookImage from './assests/images/js3.png';

const BookCard = ({img}) => {
  return (
    <div className="book-card">
      {/* <img
        src="https://d34a0mln2492j4.cloudfront.net/unsigned/resize:fit:317:447:0/gravity:sm/plain/https%3A%2F%2Fbookscape-s3-bucket.s3.amazonaws.com%2Fproduct_images%2F9780143470540.jpg"
        alt="World's Best Ex-Girlfriend"
        className="book-card-image"
      /> */}
      <img
        src={img}
        alt="World's Best Ex-Girlfriend"
        className="book-card-image"
      />
      <div className="book-card-content">
        <h3 className="book-card-title">World's Best Ex-Girlfriend</h3>
        <p className="book-card-author">Durjoy Datta</p>
        <div className="book-card-price-container">
          <span className="book-card-price">₹223</span>
          <span className="book-card-original-price">₹299</span>
          <span className="book-card-discount">(-25%)</span>
        </div>
        <button className="book-card-button">ADD TO CART</button>
      </div>
    </div>
  );
};

export default BookCard;
