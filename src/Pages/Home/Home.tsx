import React from 'react';
import { Helmet } from '../../Components/Element';
import { RootState } from '../../redux';
import { useAppSelector } from '../../redux/hook';
import Hero from './Hero';
import ProductSection from './ProductSection';

const Home = () => {
  const auth = useAppSelector((state: RootState) => state.auth.value);
  return (
    <>
      <Helmet title="Home Page" />
      <Hero />
      <h1 className="text-2xl text-center">{auth.userName}</h1>
      <ProductSection />
    </>
  );
};

export default Home;
