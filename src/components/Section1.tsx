import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';

function Section1() {
  return (
    <div className="absolute top-1/2 font-['AvenirBlack'] left-1/2 -translate-x-2/4">
      <h1 className="text-8xl uppercase text-white/75">Digital solutions</h1>
      <div className="text-white text-2xl font-['Campton'] font-medium mb-6">
        Who needs a rocket?
      </div>
      <a
        className="text-white flex text-xl font-['Campton'] font-medium"
        href="/services"
      >
        <span className="mr-1">Our services</span>
        <ArrowLongRightIcon />
      </a>
    </div>
  );
}

export default Section1;
