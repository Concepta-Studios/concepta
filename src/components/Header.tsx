import Logo from './Logo';
import PlusIcon from '../icons/PlusIcon';

interface HeaderProps {
  toggleMenu: () => void;
  menuOpen: boolean;
}

function Header({ toggleMenu, menuOpen }: HeaderProps) {
  return (
    <div className="absolute w-full z-[1]">
      <nav className="max-w-screen-2xl p-10 m-auto">
        <div className="font-['Campton'] font-light flex justify-between items-center">
          <div className="cursor-pointer">
            <Logo opacity={'0.738'} />
          </div>
          <div className="text-white flex text-xl">
            <div className="hidden sm:block mr-16 cursor-pointer">Contact</div>
            <div className="flex cursor-pointer" onClick={toggleMenu}>
              <span className="mr-1">Menu</span>
              <PlusIcon
                style={{
                  transform: menuOpen ? 'rotate(45deg)' : 'rotate(0)',
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
