import React from 'react';
import { Helmet, Nav } from '../../Components/Element';
import ProductCard from '../../Components/Element/ProductCard';

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

  const productList = [
    {
      title: 'brand new chair',
      image: 'https://freepngimg.com/thumb/chair/13-2-chair-free-download-png.png',
      id: 1,
      price: '10000',
    },
    {
      title: 'chair',
      image: 'https://freepngimg.com/thumb/chair/13-2-chair-free-download-png.png',
      id: 1,
      price: '10000',
    },
  ];
  return (
    <>
      <Helmet title="Shop" />
      <div className="container mx-auto mt-12">
        <>
          <Nav nav={nav} />
          <div className="grid grid-cols-4 gap-2">
            {productList.map((item) => (
              <ProductCard product={item} />
            ))}
          </div>
        </>
      </div>
    </>
  );
};

export default Shop;
