import React from 'react'
import MenuNav from './MenuNav';
const Nav = () => {
  return (
    <nav className="py-3">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <img src="https://i.pinimg.com/736x/d2/14/f2/d214f23ff31bfbd0cded32db9f957b7e.jpg" alt="Mountain" className="h-8 w-auto mr-2" />
        <h1 className="text-lg font-bold font-Bangers">El Andino</h1>
      </div>
<MenuNav></MenuNav>
    </div>
  </nav>
  );
};


export default Nav