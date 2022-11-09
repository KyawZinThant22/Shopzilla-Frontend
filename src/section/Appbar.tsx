import React, { useState } from 'react';
import { NavProps } from '../@types';

//third party
import { NavLink } from 'react-router-dom';
import { Bars, Cart, Heart, Logout, Search } from '../assets/icons';
import { Drawer } from '../Components/Element';
import { SignInPage } from '../Pages';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { unSetAuth } from '../redux/reducers/auth';
import Cookies from 'js-cookie';
import { RootState } from '../redux';

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

  const [show, setShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const authData = useAppSelector((state: RootState) => state.auth.value);

  const handleLogout = () => {
    Cookies.remove('token');
    dispatch(unSetAuth());
  };
  return (
    <div className="max-w-screen relative bg-transparent hover:bg-white transition-all duration-300 p-9 z-10">
      <div className="grid grid-cols-3 xl:flex xl:justify-between items-center w-full mx-auto  ">
        <div className="col-span-2 grid grid-cols-2 items-center xl:flex xl:items-center space-x-4">
          <Bars />
          <NavLink to="/home">
            <h1 className="font-bold uppercase text-2xl cursor-pointer justify-self-center">
              Shopzilla
            </h1>
          </NavLink>
          <nav className="flex">
            {navLink.map((nav) => (
              <NavLink
                key={nav.nav}
                to={nav.route}
                style={({ isActive }) => (isActive ? activeStyle : styled)}
                className="relative ml-6 "
              >
                <span className=" text-sm hidden xl:block nav-link hover:after:w-full hover:after:left-0 font-medium">
                  {nav.nav}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className=" items-center justify-self-end gap-4 hidden xl:flex">
          <div className="font-light text-sm cursor-pointer">
            {authData.userName ? (
              <>
                <span onClick={() => setShow(!show)} className="text-xs">
                  My Account
                </span>
                <Drawer width="w-[600px]" show={show} setShow={setShow}>
                  <SignInPage setShow={setShow} />
                </Drawer>
              </>
            ) : (
              <>
                <span onClick={() => setShow(!show)}>Sign in</span>
                <Drawer width="w-[600px]" show={show} setShow={setShow}>
                  <SignInPage setShow={setShow} />
                </Drawer>
              </>
            )}
          </div>

          <div className="cursor-pointer ">
            <Search />
          </div>
          <div className="items-center flex cursor-pointer">
            <Heart />
            <label className="badge">0</label>
          </div>
          <div className="flex items-center cursor-pointer">
            <Cart />
            <label className="badge">0</label>
          </div>
          <div className="cursor-pointer" onClick={handleLogout}>
            <Logout />
          </div>
        </div>
        <div className="items-center justify-self-end gap-4 xl:hidden flex">
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
