import React from 'react'
import MenuNav from './MenuNav';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="h-[5rem] ">
    <div className="container mx-auto flex items-center justify-between">
      <Link to={'/'}>
      <div className="flex items-center">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/kiosco-24-logo-png-transparent.png" alt="Mountain" className="h-24 w-32 " />
      {/* <img src="https://r73.cooltext.com/rendered/cooltext454123310117814.png"  className="h-8 w-auto mr-2"  alt="" /> */}
      </div>
      </Link>
<MenuNav></MenuNav>
    </div>
  </nav>
  );
};


export default Nav