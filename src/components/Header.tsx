import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <nav className="absolute w-full p-10">
      <div className="font-['Campton'] font-light flex justify-between items-center">
        <div className="">
          <Logo />
        </div>
        <div className="text-white flex text-xl">
          <div className="mr-16">Contact</div>
          <div>Menu</div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
