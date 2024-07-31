import React, { useState } from 'react';
import Header from './Header'; // Make sure the path is correct based on your folder structure
import NavigationBar from './NavigationBar'; // Import the NavigationBar component

const Product = () => {
  const [mainImage, setMainImage] = useState(`${process.env.PUBLIC_URL}/images/saree.jpg`);

  const changeImage = (image) => {
    setMainImage(`${process.env.PUBLIC_URL}/images/${image}`);
  };

  return (
    <div>
      <Header />
      <NavigationBar /> {/* Add the NavigationBar component here */}
      <div className="product">
        <div className="product-image">
          <img src={mainImage} alt="Saree" />
          
        </div>
        <div className="product-image-thumbnails">
          <img
              src={`${process.env.PUBLIC_URL}/images/thumbnail.jpg`}
              alt="Thumbnail 2"
              onMouseOver={() => changeImage('thumbnail.jpg')}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/thumbnail2.jpg`}
              alt="Thumbnail 2"
              onMouseOver ={() => changeImage('thumbnail2.jpg')}
            />
             <img
              src={`${process.env.PUBLIC_URL}/images/saree.jpg`}
              alt="Thumbnail 2"
              onMouseOver={() => changeImage('saree.jpg')}
            />
          </div>
        <div className="product-details">
          <h2>Saree</h2>
          <p className="price">
            <span className="original-price">£40.00</span> £28.00
          </p>
          <p className="sold">1,238 Sold</p>
          <p className="rating">4.5</p>
          <p className="description">
            Boba etiam ut bulla tea est potus dilectus singulari compositiones saporum et textum...
            <span className="see-more">See More...</span>
          </p>
          <p className="color">Color: Royal Brown</p>
          <div className="actions">
            <button className="btn add-to-cart">Add To Cart</button>
            <button className="btn checkout-now">Checkout Now</button>
          </div>
          <a href="#" className="delivery-terms">Delivery T&C</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
