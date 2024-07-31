import React from 'react';

const RelatedProducts = () => {
  const relatedProducts = [
    { id: 1, img: `${process.env.PUBLIC_URL}/images/saree.jpg`, text: 'Pink Georgette Saree With Ethnic Embroidery And Embellishments', price: '₹3,899.00', description: '37% OFF.' },
    { id: 2, img: `${process.env.PUBLIC_URL}/images/thumbnail.jpg`, text: 'Pink Floral Print Chanderi Saree With Tassels', price: '₹3,374.00', description: '22% OFF.' },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/thumbnail2.jpg`, text: 'Pink Floral Zari Woven Design Silk Blend Saree With Tassels', price: '₹8500.00', description: '11% OFF.' },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/thumbnail2.jpg`, text: 'Pink Chiffon Saree With Stone Embellished Borders', price: '₹1649.00', description: '45% OFF.' },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/thumbnail2.jpg`, text: 'Fuchsia Tussar Zari Woven Saree with Tasselled Border', price: '₹4498.00', description: '9% OFF.' },
    { id: 3, img: `${process.env.PUBLIC_URL}/images/thumbnail2.jpg`, text: 'Mustard Ethnic Motifs Woven Design Jacquard Weave Silk Blend Saree', price: '₹2,799.00', description: '30% OFF.' },];

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <div className="related-products-list">
        {relatedProducts.map(product => (
          <div key={product.id} className="related-product">
            <img src={product.img} alt={product.text} />
            <div className="related-product-details">
              <p>{product.text}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
