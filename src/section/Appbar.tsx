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
    <div className="h-40 w-full bg-green-400 pt-4    ">
      <div className="flex items-center justify-between container mx-auto  ">
        <div className="flex items-center space-x-4">
          <h1>Humbeger</h1>
          <h2>logo</h2>
          {navLink.map((nav) => (
            <NavLink
              key={nav.nav}
              to={nav.route}
              style={({ isActive }) => (isActive ? activeStyle : styled)}
            >
              <span>{nav.nav}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {navLink.map((nav) => (
            <p>{nav.nav}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
