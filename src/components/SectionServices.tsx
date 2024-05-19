import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import BracketIcon from '../icons/BracketIcon';
import CubeIcon from '../icons/CubeIcon';
import PencilIcon from '../icons/PencilIcon';

function SectionServices() {
  return (
    <div id="services" className="bg-black text-white py-16 sm:py-32 px-10">
      <div className="max-w-screen-2xl flex flex-col sm:flex-row m-auto">
        <div className="sm:w-3/5 sm:pr-32 mb-20 sm:mb-0">
          <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8">
            What we do
          </h1>
          <div className="text-[#87868B] font-['LexendDeca'] font-light text-md sm:text-xl mb-8 sm:mb-12">
            We are dedicated to empowering small business owners by providing
            professional, affordable and innovative digital solutions. We strive
            to deliver exceptional value and customer service while upholding
            integrity, creativity and collaboration in everything we do.
          </div>
          <div className="flex font-['LexendDeca'] font-light text-md sm:text-xl">
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
        <div className="sm:w-2/5 font-['LexendDeca'] font-light text-xl">
          <div className="flex justify-between">
            <PencilIcon className="w-[32px] h-[32px] sm:w-1/6 sm:h-12 text-[#d1b104]" />
            <div className="w-5/6 pb-10">
              <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3">
                UX and UI design
              </h2>
              <div className="text-[#87868B] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu justo id nisi dignissim.
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <BracketIcon className="w-[32px] h-[32px] sm:w-1/6 sm:h-12 text-[#d16b04]" />
            <div className="w-5/6 pb-10">
              <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3">
                Backend and frontend
              </h2>
              <div className="text-[#87868B] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu justo id nisi dignissim.
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <CubeIcon className="w-[32px] h-[32px] sm:w-1/6 sm:h-12 text-[#b903d1]" />
            <div className="w-5/6 pb-10">
              <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3">
                AI experts
              </h2>
              <div className="text-[#87868B] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu justo id nisi dignissim.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServices;
