interface MenuItemProps {
  href: string;
  label: string;
  closeMenu(): void;
}

function MenuItem({ label, href, closeMenu }: MenuItemProps) {
  return (
    <li className="mb-10 last-of-type:mb-0">
      <a
        href={href}
        className="origin-left transition-transform inline-block hover:scale-[1.2]"
        onClick={closeMenu}
      >
        {label}
      </a>
    </li>
  );
}

interface MenuProps {
  menuOpen: boolean;
  closeMenu(): void;
}

function Menu({ menuOpen, closeMenu }: MenuProps) {
  return (
    <nav
      style={{
        top: menuOpen ? 0 : '-100%',
        transition: 'top .6s ease-in-out',
      }}
      className="absolute w-full h-full font-['Campton'] font-light backdrop-blur-lg backdrop-contrast-100"
    >
      <div className="max-w-screen-2xl m-auto flex text-white h-full p-10">
        <div className="flex flex-col justify-between w-full">
          <ul className="text-4xl sm:text-6xl mt-48 sm:mt-96">
            <MenuItem
              label={'Utvalda kunduppdrag'}
              href={'#caseStudies'}
              closeMenu={closeMenu}
            />
            <MenuItem
              label={'Våra tjänster'}
              href={'#aboutUs'}
              closeMenu={closeMenu}
            />
            <MenuItem
              label={'Kontakta oss'}
              href={'#contactUs'}
              closeMenu={closeMenu}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
