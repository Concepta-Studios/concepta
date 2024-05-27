import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import ChameleonPic from '../pics/chameleon.png';

function SectionServices() {
  return (
    <div id="services" className="bg-black text-white py-16 sm:py-32 px-10">
      <div className="max-w-screen-2xl flex flex-col sm:flex-row m-auto mb-32">
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
        <img
          className="relative -right-10 sm:w-3/5 max-w-[400px]"
          src={ChameleonPic}
          alt="Chameleon"
        />
      </div>
      <div className="font-['LexendDeca'] font-light text-xl max-w-screen-2xl flex flex-col sm:flex-row m-auto justify-between">
        <div className="pb-10 max-w-[350px] sm:mr-20">
          <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3 text-[#d1b104]">
            UX and UI design
          </h2>
          <div className="text-[#87868B] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            justo id nisi dignissim.
          </div>
        </div>
        <div className="pb-10 max-w-[350px] sm:mr-20">
          <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3 text-[#d16b04]">
            Backend and frontend
          </h2>
          <div className="text-[#87868B] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            justo id nisi dignissim.
          </div>
        </div>
        <div className="pb-10 max-w-[350px]">
          <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3 text-[#b903d1]">
            AI experts
          </h2>
          <div className="text-[#87868B] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            justo id nisi dignissim.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServices;
