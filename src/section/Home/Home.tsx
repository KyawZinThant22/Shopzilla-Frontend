import React from 'react';
import { Helmet } from '../../Components/Element';
import Hero from './Hero';
import ProductSection from './ProductSection';

const Home = () => {
  return (
    <>
      <Helmet title="Home Page" />
      <Hero />
      <ProductSection />
    </>
  );
};

export default Home;
