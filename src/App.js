import React from 'react';
import './styles.css';
import Product from './components/product';
import ProductReviews from './components/productReviews';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/footer';
import NavigationBar from './components/NavigationBar';
const App = () => {
  return (
    <div className="app">
      
      <main className="main-content">
        <Product />
        <ProductReviews />
        <RelatedProducts />
        

        <Footer/>
      </main>
    </div>
  );
};

export default App;

