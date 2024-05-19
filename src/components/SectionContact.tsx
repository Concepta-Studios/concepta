import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import DigitalSolutionsPic from '../pics/digital_solutions_ugly_screenshot.png';

function SectionContact() {
  return (
    <div
      id="contactUs"
      className="bg-black text-white pb-32 flex flex-col sm:flex-row px-10"
    >
      <img
        className="relative -left-10 sm:w-1/2 mb-10 sm:mb-0 sm:mr-20"
        src={DigitalSolutionsPic}
        alt="Digital solutions"
      />
      <div className="sm:w-1/2 sm:pl-20 sm:pr-20">
        <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8">
          Aenean urna est
        </h1>
        <div className="text-[#87868B] font-['LexendDeca'] font-light text-base sm:text-xl mb-6 sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          justo id nisi dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas eu justo id nisi dignissim.
        </div>
        <a
          className="flex w-1/2 text-[#05C9C2] text-base sm:text-xl"
          href="/lorem-ipsum"
        >
          <span className="mr-2">Lorem ipsum</span>
          <ArrowLongRightIcon />
        </a>
      </div>
    </div>
  );
}

export default SectionContact;
