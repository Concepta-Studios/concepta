import React from 'react';
import Logo from './Logo';
import PlusIcon from '../icons/PlusIcon';

function Header() {
  return (
    <nav className="max-w-screen-2xl p-10 m-auto">
      <div className="font-['Campton'] font-light flex justify-between items-center">
        <div className="cursor-pointer">
          <Logo />
        </div>
        <div className="text-white flex text-xl">
          <div className="mr-16 cursor-pointer">Contact</div>
          <div className="flex cursor-pointer group">
            <span className="mr-1">Menu</span>
            <PlusIcon className="group-hover:rotate-45 transition ease-in-out duration-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
