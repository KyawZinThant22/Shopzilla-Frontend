import React, { useState } from 'react';
import { EyeOpen, Heart } from '../../assets/icons';

interface IProduct {
  product: {
    title: string;
    image: string;
    id: number | string;
    price: string | number;
  };
}

const ProductCard = ({ product }: IProduct) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className="mt-12 hover:bg-white hover:shadow-2xl h-[400px] flex flex-col w-[300px] p-6 duration-700 cursor-pointer"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={product.image} alt={product.title} className="w-[150px] mx-auto" />

      <div className="flex flex-col items-start justify-end h-full">
        <h1>{product.title}</h1>
        <span>{product.price} MMK</span>
      </div>

      {show && (
        <div className={`  mt-4 flex items-center justify-between`}>
          <p className="text-xs font-medium ">ADD TO CART</p>
          <div className="flex items-center gap-3">
            <EyeOpen styled="w-5 h-5" />
            <Heart />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
