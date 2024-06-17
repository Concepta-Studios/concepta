import { useState } from 'react';
import Video from '../video/hero.mp4';
import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import Header from './Header';
import Menu from './Menu';

function SectionMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="hero" className="h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute h-screen w-full object-cover -z-[1]"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <div className="absolute bottom-0 sm:top-1/2 font-['AvenirBlack'] left-1/2 -translate-x-2/4 -translate-y-2/4 flex p-10 w-full">
        <div className="m-auto">
          <h1 className="text-6xl sm:text-8xl uppercase text-white/60">
            DIGITALA LÖSNINGAR
          </h1>
          <div className="text-white text-2xl font-['Campton'] font-medium mb-6">
            Vi älskar att jobba med människor!
          </div>
          <a
            className="text-white flex text-xl font-['Campton'] font-medium"
            href="#services"
          >
            <span className="mr-1">Våra tjänster</span>
            <ArrowLongRightIcon />
          </a>
        </div>
      </div>
      <Menu menuOpen={menuOpen} closeMenu={toggleMenu} />
    </div>
  );
}

export default SectionMain;
