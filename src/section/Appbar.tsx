import React from 'react';
import { NavProps } from '../@types';

//third party
import { NavLink } from 'react-router-dom';

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
      <div className="flex items-center justify-between container mx-auto  ">
        <div className="flex items-center space-x-4">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </div>
          <h1 className="font-bold uppercase text-2xl cursor-pointer">Shopzilla</h1>
          {navLink.map((nav) => (
            <NavLink
              key={nav.nav}
              to={nav.route}
              style={({ isActive }) => (isActive ? activeStyle : styled)}
            >
              <span className='font-light text-sm ml-5'>{nav.nav}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
            <span className='font-light text-sm cursor-pointer'>Sign in</span>
            <div className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-light mx-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <div className='flex items-center cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <label className='badge'>0</label>
            </div>
            <div className='flex items-center cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <label className='badge'>0</label>
            </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          {navLink.map((nav) => (
            <p>{nav.nav}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Appbar;
