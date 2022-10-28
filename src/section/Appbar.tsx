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
    color: 'black',
    textDecoration: 'none',
    
  };

  let styled = {
    color: '#3D3C42',
    textDecoration: 'none',
  };

  return (
    <div className="max-w-screen bg-white p-9">
      <div className="grid grid-cols-3 xl:flex xl:justify-between items-center w-full mx-auto  ">
        <div className="col-span-2 grid grid-cols-2 items-center xl:flex xl:items-center space-x-4">
          <Bars />
          <h1 className="font-bold uppercase text-2xl cursor-pointer justify-self-center">Shopzilla</h1>
          <nav className='flex'>
            {navLink.map((nav) => (
              <NavLink
                key={nav.nav}
                to={nav.route}
                style={({ isActive }) => (isActive ? activeStyle : styled)}
                className='relative ml-6'
              >
                <span className="font-light text-sm hidden xl:block nav-link hover:after:w-full hover:after:left-0">{nav.nav}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-self-end space-x-4">
          <span className="font-light text-sm cursor-pointer hidden xl:block">Sign in</span>
          <div className="cursor-pointer hidden xl:block">
            <Search />
          </div>
          <div className="items-center cursor-pointer hidden xl:flex">
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

