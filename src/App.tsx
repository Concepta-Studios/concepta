import React from 'react';
import Header from './components/Header';
import './index.css';
import Video from './video/hero.mp4';
import ArrowLongRightIcon from './icons/ArrowLongRightIcon';

function App() {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <Header />
      <div className="absolute top-1/2 font-['AvenirBlack'] left-1/2 -translate-x-2/4">
        <h1 className="text-8xl uppercase text-white/75">Digital solutions</h1>
        <div className="text-white text-2xl font-['Campton'] font-medium mb-6">
          Who needs a rocket?
        </div>
        <div className="text-white flex text-xl font-['Campton'] font-medium cursor-pointer">
          <span className="mr-1">Our services</span>
          <ArrowLongRightIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
