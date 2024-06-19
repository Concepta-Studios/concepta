import Logo from './Logo';
import PlusIcon from '../icons/PlusIcon';

interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

function Header({ toggleMenu, isMenuOpen }: HeaderProps) {
  return (
    <div className="absolute w-full">
      <nav className="max-w-screen-2xl p-10 m-auto">
        <div className="font-['Campton'] font-light flex justify-between items-center">
          <div className="cursor-pointer">
            <Logo opacity={'0.738'} />
          </div>
          <div className="text-white flex text-xl z-[1]">
            <div className="hidden sm:block mr-16 cursor-pointer">
              Kontakta oss
            </div>
            <div className="flex cursor-pointer" onClick={toggleMenu}>
              <span className="mr-1">Meny</span>
              <PlusIcon
                style={{
                  transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
                }}
                className="transition ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
