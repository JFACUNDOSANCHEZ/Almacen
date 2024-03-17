import React from 'react'
import MenuNav from './MenuNav';
const Nav = () => {
  return (
    <nav className="py-3">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <img src="https://i.pinimg.com/736x/d2/14/f2/d214f23ff31bfbd0cded32db9f957b7e.jpg" alt="Mountain" className="h-8 w-auto mr-2" />
      <img src="https://r73.cooltext.com/rendered/cooltext454123310117814.png"  className="h-8 w-auto mr-2"  alt="" />
      </div>
<MenuNav></MenuNav>
    </div>
  </nav>
  );
};


export default Nav