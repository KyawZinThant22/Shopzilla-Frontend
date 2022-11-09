import React from 'react';
import { chair } from '../../assets/products';

const Hero = () => {
  return (
    <div className="min-w-full min-h-screen bg-[#FBEEE6] absolute top-0 left-0 z-0">
      <div className="grid grid-cols-2 p-52">
        <h1>Hello World</h1>
        <h1>Hello Zarmani</h1>
        <img src={chair} alt="chair" />
      </div>
    </div>
  );
};

export default Hero;
