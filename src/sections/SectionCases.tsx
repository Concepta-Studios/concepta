import Carousel from '../components/Carousel';

function SectionCases() {
  return (
    <div id="caseStudies" className="bg-black text-white pb-32 px-10">
      <div className="max-w-screen-2xl m-auto">
        <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl mb-4 sm:mb-8 text-center">
          Några av våra kunduppdrag
        </h1>
        <Carousel />
      </div>
    </div>
  );
}

export default SectionCases;
