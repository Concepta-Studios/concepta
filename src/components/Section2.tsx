import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import BracketIcon from '../icons/BracketIcon';
import CubeIcon from '../icons/CubeIcon';
import PencilIcon from '../icons/PencilIcon';

function Section2() {
  return (
    <div className="flex bg-black text-white p-32">
      <div className="w-3/5 pr-32">
        <h1 className="font-['AvenirBlack'] text-6xl pb-8">What we do</h1>
        <div className="text-[#87868B] font-['LexendDeca'] font-light text-xl mb-12">
          We are dedicated to empowering small business owners by providing
          professional, affordable and innovative digital solutions. We strive
          to deliver exceptional value and customer service while upholding
          integrity, creativity and collaboration in everything we do.
        </div>
        <div className="flex font-['LexendDeca'] font-light">
          <a className="flex w-1/2 text-[#05C9C2]" href="/contact">
            <span className="mr-2">Contact us</span>
            <ArrowLongRightIcon />
          </a>
          <a className="flex w-1/2 text-[#05C9C2]" href="/services">
            <span className="mr-2">Our services</span>
            <ArrowLongRightIcon />
          </a>
        </div>
      </div>
      <div className="w-2/5 font-['LexendDeca'] font-light text-xl">
        <div className="flex">
          <PencilIcon className="w-1/6 h-12 text-[#d1b104]" />
          <div className="w-5/6 pb-10">
            <h2 className="font-['AvenirBlack'] text-2xl mb-2 mt-3">
              UX and UI design
            </h2>
            <div className="text-[#87868B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu justo id nisi dignissim.
            </div>
          </div>
        </div>
        <div className="flex">
          <BracketIcon className="w-1/6 h-12 text-[#d16b04]" />
          <div className="w-5/6 pb-10">
            <h2 className="font-['AvenirBlack'] text-2xl mb-2 mt-3">
              Backend and frontend
            </h2>
            <div className="text-[#87868B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu justo id nisi dignissim.
            </div>
          </div>
        </div>
        <div className="flex">
          <CubeIcon className="w-1/6 h-12 text-[#b903d1]" />
          <div className="w-5/6 pb-10">
            <h2 className="font-['AvenirBlack'] text-2xl mb-2 mt-3">
              AI experts
            </h2>
            <div className="text-[#87868B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu justo id nisi dignissim.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
