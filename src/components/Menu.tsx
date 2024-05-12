interface MenuProps {
  menuOpen: boolean;
  toggleMenu(): void;
}

function Menu({ menuOpen, toggleMenu }: MenuProps) {
  return (
    <nav
      style={{
        top: menuOpen ? 0 : '-100%',
        transition: 'top .6s ease-in-out',
      }}
      className="absolute w-full h-full bg-black opacity-50 font-['Campton'] font-light"
    >
      <div className="max-w-screen-2xl flex m-auto text-6xl text-white">
        <ul className="absolute top-1/2 -translate-y-1/2">
          <li className="mb-10">
            <a href="#caseStudies" onClick={toggleMenu}>
              Case studies
            </a>
          </li>
          <li className="mb-10">
            <a href="#aboutUs" onClick={toggleMenu}>
              About us
            </a>
          </li>
          <li>
            <a href="#contactUs" onClick={toggleMenu}>
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
