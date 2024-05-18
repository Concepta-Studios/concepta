import Header from './components/Header';
import Video from './video/hero.mp4';
import SectionMain from './components/SectionMain';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { useState } from 'react';
import SectionCases from './components/SectionCases';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute h-full w-full object-cover -z-[1]"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <SectionMain />
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
      <Section2 />
      <SectionCases />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
