import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import { GlobleStyle } from './components/globalStyles';
import Hero from './components/Hero/Hero';
import { productData, productDataTwo } from './components/Products/data';
import Products from './components/Products/Products';



function App() {
  return (
    <Router>
      <GlobleStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
