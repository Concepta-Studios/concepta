import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <nav>
      <div className="grid gap-4 grid-cols-6 font-['Campton'] font-light">
        <div className="bg-red-200">
          <Logo />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div className="bg-red-200">Contact</div>
        <div className="bg-red-200">Menu</div>
      </div>
    </nav>
  );
}

export default Header;
