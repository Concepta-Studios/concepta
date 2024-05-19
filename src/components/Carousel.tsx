import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import Slider from 'react-slick';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

import './Carousel.css';

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <ChevronRightIcon className={className} onClick={onClick} stroke="white" />
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <ChevronLeftIcon className={className} onClick={onClick} stroke="white" />
  );
}

function Block() {
  return (
    <div className="bg-[#161618] rounded-3xl xl:w-[1000px]">
      <div className="flex flex-col sm:flex-row px-8 py-8 sm:px-20 sm:py-20">
        <h2 className="text-xl sm:text-4xl font-bold mb-6 sm:hidden">
          Lorem ipsum dolor
        </h2>
        <div className="sm:block sm:w-1/2 mb-6 sm:mb-0 sm:mr-16 bg-neutral-400 rounded-xl h-[180px] sm:h-[400px]"></div>
        <div className="sm:w-1/2 font-['LexendDeca']">
          <h2 className="hidden sm:block text-xl sm:text-4xl font-bold mb-10">
            Lorem ipsum dolor
          </h2>
          <div className="text-[#87868B] text-base sm:text-xl font-bold mb-6 sm:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            justo id nisi dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas eu justo id nisi dignissim.
          </div>
          <a
            className="flex w-full sm:w-1/2 text-[#05C9C2] text-base sm:text-xl"
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-2">Visit homepage</span>
            <ArrowLongRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Block />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
