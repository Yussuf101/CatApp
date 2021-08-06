import React from 'react'; 
import HeroSection from '../components/HeroSection.js';
// import '../src/App.css';


function Home(props) {
  const {products, AddItems}=props;
  return (
    <>
      <HeroSection />
      {products.map((product) => (
        <Product key={product.id} product={product} AddItems={AddItems}></Product>
          ))}
    </>
  );
}

export default Home;

