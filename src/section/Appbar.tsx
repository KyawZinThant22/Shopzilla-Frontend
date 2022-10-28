import React from 'react';
import { NavProps } from '../@types';

//third party
import { NavLink } from 'react-router-dom';
import { Bars, Cart, Heart, Search } from '../assets/icons';

const Appbar = () => {
  const navLink: NavProps[] = [
    {
      nav: 'Home',
      route: '/home',
    },
    {
      nav: 'Shop',
      route: '/shop',
    },
    {
      nav: 'Features',
      route: '/features',
    },
    {
      nav: 'Pages',
      route: '/pages',
    },
    {
      nav: 'Portfolio',
      route: '/portfolio',
    },
    {
      nav: 'Journal',
      route: '/journal',
    },
  ];

  let activeStyle = {
    color: 'red',
    textDecoration: 'none',
  };

  let styled = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <div className="w-full bg-white p-9">
      <div className="flex items-center justify-between 2xl:w-[1800px] lg:w-[1200px] mx-auto  ">
        <div className="flex items-center space-x-4">
          <Bars />
          <h1 className="font-bold uppercase text-2xl cursor-pointer">Shopzilla</h1>
          {navLink.map((nav) => (
            <NavLink
              key={nav.nav}
              to={nav.route}
              style={({ isActive }) => (isActive ? activeStyle : styled)}
            >
              <span className="font-light text-sm ml-5">{nav.nav}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <span className="font-light text-sm cursor-pointer">Sign in</span>
          <div className="cursor-pointer">
            <Search />
          </div>
          <div className="flex items-center cursor-pointer">
            <Heart />
            <label className="badge">0</label>
          </div>
          <div className="flex items-center cursor-pointer">
            <Cart />
            <label className="badge">0</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
