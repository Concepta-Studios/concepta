import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import ChameleonPic from '../pics/chameleon.png';

function SectionAbout() {
  return (
    <div
      id="aboutUs"
      className="bg-black text-white pb-32 flex flex-col sm:flex-row"
    >
      <div className="sm:w-2/5 pl-20">
        <h1 className="font-['AvenirBlack'] text-3xl sm:text-6xl pb-8">
          Lorem ipsum dolor
        </h1>
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
      <img className="sm:w-3/5" src={ChameleonPic} alt="Chameleon" />
    </div>
  );
}

export default SectionAbout;
