// 'use client'
import Image from 'next/image';
import React from 'react';
import hero from '@/assset/img/logo.png';
import MyNavLink from './MyNavLink';

const Navber = () => {

    return (
      <div className="sticky rounded-xl top-0 container mx-auto navbar bg-base-100 shadow-sm">
  <div className=" navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <MyNavLink></MyNavLink>
      </ul>
    </div>
    <div>

    
    <Image src={hero} alt='Logo' className='w-10'></Image>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <MyNavLink></MyNavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navber;