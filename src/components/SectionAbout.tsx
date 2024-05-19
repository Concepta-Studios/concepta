import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import ChameleonPic from '../pics/chameleon.png';

function SectionAbout() {
  return (
    <div
      id="aboutUs"
      className="bg-black text-white pb-32 px-10 flex flex-col-reverse sm:flex-row"
    >
      <div className="sm:w-2/5 sm:pl-20">
        <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8">
          Lorem ipsum dolor
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
      <img
        className="relative -right-10 sm:w-3/5"
        src={ChameleonPic}
        alt="Chameleon"
      />
    </div>
  );
}

export default SectionAbout;
