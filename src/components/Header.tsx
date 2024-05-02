import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <nav className="absolute w-full">
      <div className="grid gap-4 grid-cols-6 font-['Campton'] font-light">
        <div className="">
          <Logo />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className="text-white">Contact</div>
        <div className="text-white">Menu</div>
      </div>
    </nav>
  );
}

export default Header;
