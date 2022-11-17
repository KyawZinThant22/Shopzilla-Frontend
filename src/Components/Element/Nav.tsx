import React from 'react';
import { Link } from 'react-router-dom';
import { Right } from '../../assets/icons';

interface INav {
  nav: {
    title: string;
    parent: {
      title: string;
      link: string;
    };
    child: {
      title: string;
      link: string;
    };
  };
}

const Nav = ({ nav }: INav) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-medium">{nav.title}</h1>
      <div className="flex items-center ">
        <Link to={nav.parent.link}>
          <span className="text-[10px] hover:text-black text-gray-500">{nav.parent.title}</span>
        </Link>
        <Right styled="w-4 h-4 text-gray-500" />
        <Link to={nav.child.link}>
          <span className="text-[10px] hover:text-black text-gray-500">{nav.child.title}</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
