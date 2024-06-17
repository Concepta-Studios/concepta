import Logo from './Logo';
import SocialMediaLink from './SocialMediaLink';

function Footer() {
  return (
    <div className="bg-[#161618] text-white py-10 sm:py-20 px-10">
      <nav className="max-w-screen-2xl m-auto relative">
        <Logo className="absolute -top-16 sm:-top-32 left-1/2 -translate-x-1/2" />
        <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between font-['LexendDeca']">
          <div className="mb-10 sm:mb-0">
            <h1 className="font-['AvenirBlack'] text-3xl sm:text-5xl pb-8">
              Concepta studios
            </h1>
            <div className="font-bold text-md sm:text-xl mb-2">
              Disney World, 114 41 Florida
            </div>
            <div className="font-bold text-md sm:text-xl mb-2">
              info@conceptastudios.se
            </div>
            <div className="font-bold text-md sm:text-xl mb-2">
              +1 407 555 555 55
            </div>
          </div>
          <div className="text-[#05C9C2] flex justify-between w-full sm:w-auto sm:flex-col sm:self-end font-['LexendDeca'] text-sm sm:text-lg">
            <SocialMediaLink label={'Cookies'} href={'#'} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
