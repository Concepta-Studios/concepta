import { useState } from 'react';
import Video from '../video/hero.mp4';
import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import Header from '../components/Header';
import Menu from '../components/Menu';

function SectionMain() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div id="hero" className="h-screen">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute h-screen w-full object-cover -z-[1]"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="absolute bottom-0 sm:bottom-[20%] font-['AvenirBlack'] left-1/2 -translate-x-2/4 -translate-y-2/4 flex p-10 w-full">
        <div className="m-auto">
          <h1 className="text-5xl sm:text-8xl uppercase text-white/60 mb-2">
            Digitala lösningar
          </h1>
          <div className="text-white text-xl sm:text-2xl font-['Campton'] font-medium mb-10">
            Vi älskar att jobba med människor!
          </div>
          <a
            className="text-white flex text-base sm:text-xl font-['Campton'] font-medium"
            href="#services"
          >
            <span className="mr-1">Våra tjänster</span>
            <ArrowLongRightIcon />
          </a>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />
    </div>
  );
}

export default SectionMain;
