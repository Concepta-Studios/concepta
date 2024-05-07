import ArrowUpRightIcon from '../icons/ArrowUpRightIcon';
import Logo from './Logo';

function Footer() {
  return (
    <div className="bg-[#161618] text-white py-20 px-10">
      <nav className="max-w-screen-2xl m-auto relative">
        <Logo className="absolute -top-[125px] left-1/2 -translate-x-1/2" />
        <div className="flex justify-between font-['LexendDeca']">
          <div className="">
            <h1 className="font-['AvenirBlack'] text-5xl pb-8">
              Concepta studios
            </h1>
            <div className="font-bold text-xl mb-2">
              Disney World, 114 41 Florida
            </div>
            <div className="font-bold text-xl mb-2">
              info@conceptastudios.se
            </div>
            <div className="font-bold text-xl mb-2">+1 407 555 555 55</div>
          </div>
          <div className="self-end font-['LexendDeca'] text-lg">
            <a className="flex mb-2" href="https://instagram.com">
              <span className="mr-2">Instagram</span>
              <ArrowUpRightIcon className="font-bold" />
            </a>
            <a className="flex" href="https://linkedin.com">
              <span className="mr-2">LinkedIn</span>
              <ArrowUpRightIcon className="font-bold" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
