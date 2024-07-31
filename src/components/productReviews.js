import React from 'react';


const productReviews = () => {
  const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
    'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg',
  ];

  return (
    <div className="ratings-reviews">
      <div className="header">
        <h2>Ratings & Reviews</h2>
        <div className="rating">
          <span className="rating-value">3.6</span>
          <span className="rating-stars">★</span>
          <span className="rating-details">20,159 ratings and 1,160 reviews</span>
        </div>
        <button className="rate-product">Rate Product</button>
      </div>
      <div className="customer-feedback">
        <div className="feedback-tags">
          <span className="tag">Light weight</span>
          <span className="tag">Value for Money</span>
          <span className="tag">Comfort</span>
          <span className="tag neutral">Material Quality</span>
          <span className="tag neutral">Opacity</span>
        </div>
        <div className="customer-images">
          {images.slice(0, 5).map((src, index) => (
            <img key={index} src={src} alt="Customer upload" />
          ))}
          {images.length > 5 && (
            <div className="more-images">+{images.length - 5}</div>
          )}
        </div>
      </div>
      <div className="reviews">
        <div className="review">
          <div className="review-header">
            <span className="review-rating">5★</span>
            <span className="review-title">Awesome</span>
          </div>
          <div className="review-content">
            <img src="review-image1.jpg" alt="Review" />
            <img src="review-image2.jpg" alt="Review" />
          </div>
          <div className="review-footer">
            <span className="review-author">Flipkart Customer</span>
            <span className="review-date">Oct, 2022</span>
            <span className="review-location">Certified Buyer, Mayurbhanj District</span>
            <div className="review-likes">
              <span>519</span> <span role="img" aria-label="thumbs up">👍</span>
              <span>97</span> <span role="img" aria-label="thumbs down">👎</span>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="review-header">
            <span className="review-rating">4★</span>
            <span className="review-title">Nice saree</span>
          </div>
          <div className="review-content">
            <img src="review-image3.jpg" alt="Review" />
          </div>
          <div className="review-footer">
            <span className="review-author">Flipkart Customer</span>
            <span className="review-date">Jul, 2022</span>
            <span className="review-location">Certified Buyer, Cuddalore District</span>
            <div className="review-likes">
              <span>102</span> <span role="img" aria-label="thumbs up">👍</span>
              <span>34</span> <span role="img" aria-label="thumbs down">👎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productReviews;
