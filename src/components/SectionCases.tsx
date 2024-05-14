import Carousel from './Carousel';

function SectionCases() {
  return (
    <div id="caseStudies" className="bg-black text-white pb-32 px-10">
      <div className="max-w-screen-2xl m-auto">
        <h1 className="font-['AvenirBlack'] text-6xl pb-8 text-center">
          Some of our cases
        </h1>
        <Carousel />
      </div>
    </div>
  );
}

export default SectionCases;
