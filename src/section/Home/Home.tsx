import React from 'react';
import { Helmet } from '../../Components/Element';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Helmet title="Home Page" />
      <Hero />
    </>
  );
};

export default Home;
