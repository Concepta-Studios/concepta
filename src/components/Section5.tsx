import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import DigitalSolutionsPic from '../pics/digital_solutions_ugly_screenshot.png';

function Section5() {
  return (
    <div id="contactUs" className="bg-black text-white pb-32 flex">
      <img
        className="w-1/2 mr-20"
        src={DigitalSolutionsPic}
        alt="Digital solutions"
      />
      <div className="w-1/2 pr-20">
        <h1 className="font-['AvenirBlack'] text-6xl pb-8">Aenean urna est</h1>
        <div className="text-[#87868B] font-['LexendDeca'] font-light text-xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          justo id nisi dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas eu justo id nisi dignissim.
        </div>
        <a className="flex w-1/2 text-[#05C9C2] text-xl" href="/lorem-ipsum">
          <span className="mr-2">Lorem ipsum</span>
          <ArrowLongRightIcon />
        </a>
      </div>
    </div>
  );
}

export default Section5;
