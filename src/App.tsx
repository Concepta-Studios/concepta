import React from 'react';
import Header from './components/Header';
import './index.css';
import Video from './video/hero.mp4';

function App() {
  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <Header />
      <h1 className="text-8xl absolute text-white/75 uppercase top-1/2 w-full text-center font-['AvenirBlack']">
        Digital solutions
      </h1>
      <div>Who needs a rocket?</div>
    </div>
  );
}

export default App;
