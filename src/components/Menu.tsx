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
      className="absolute w-full h-full font-['Campton'] font-light backdrop-blur-lg backdrop-contrast-100"
    >
      <div className="max-w-screen-2xl m-auto flex text-white h-full p-10">
        <div className="flex flex-col justify-between w-full">
          <ul className="text-4xl sm:text-6xl mt-48 sm:mt-96">
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
          <div className="flex justify-between text-md sm:text-2xl">
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
