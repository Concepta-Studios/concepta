import Header from './components/Header';
import Video from './video/hero.mp4';
import Section1 from './components/Section1';
import './index.css';
import Section2 from './components/Section2';

function App() {
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
        <Header />
        <Section1 />
      </div>
      <Section2 />
    </>
  );
}

export default App;
