import React from 'react';
import { Helmet, Nav } from '../../Components/Element';

const Shop = () => {
  const nav = {
    title: 'Shop',
    parent: {
      title: 'Home',
      link: '/home',
    },
    child: {
      title: 'Shop',
      link: '/shop',
    },
  };
  return (
    <>
      <Helmet title="Shop" />
      <div className="container mx-auto mt-12">
        <Nav nav={nav} />
      </div>
    </>
  );
};

export default Shop;
