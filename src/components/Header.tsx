import React from 'react';
import Logo from './Logo';
import PlusIcon from '../icons/PlusIcon';

function Header() {
  return (
    <nav className="absolute w-full p-10">
      <div className="font-['Campton'] font-light flex justify-between items-center">
        <div className="cursor-pointer">
          <Logo />
        </div>
        <div className="text-white flex text-xl">
          <div className="mr-16 cursor-pointer">Contact</div>
          <div className="flex cursor-pointer">
            <span className="mr-1">Menu</span>
            <PlusIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
