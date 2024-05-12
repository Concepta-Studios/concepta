import SocialMediaLink from './SocialMediaLink';

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
      className="absolute w-full h-full font-['Campton'] font-light backdrop-blur-lg"
    >
      <div className="max-w-screen-2xl flex m-auto text-white">
        <div className="absolute top-1/2 -translate-y-1/2 ">
          <ul className="text-6xl mb-36">
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
          <div className="flex text-2xl">
            <SocialMediaLink
              label={'Instagram'}
              href={'https://instagram.com'}
              className="mr-10"
            />
            <SocialMediaLink label={'LinkedIn'} href={'https://linkedin.com'} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
