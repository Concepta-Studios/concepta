import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import Slider from 'react-slick';
import ChevronRightIcon from '../icons/ChevronRightIcon';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

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

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    className: 'slider variable-width',
    centerMode: true,
    centerPadding: '60px',
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        {dots}
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '40px',
          height: '5px',
        }}
      />
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="bg-[#161618] rounded-3xl" style={{ width: '1000px' }}>
          <div className="flex p-20">
            <div className="w-1/2 mr-16 bg-white rounded-3xl h-[400px]"></div>
            <div className="w-1/2 font-['LexendDeca']">
              <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor</h2>
              <div className="text-xl font-bold mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu justo id nisi dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas eu justo id nisi
                dignissim.
              </div>
              <a
                className="flex w-1/2 text-[#05C9C2] text-xl"
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
        <div className="bg-[#161618] rounded-3xl" style={{ width: '1000px' }}>
          <div className="flex p-20">
            <div className="w-1/2 mr-16 bg-white rounded-3xl h-[400px]"></div>
            <div className="w-1/2 font-['LexendDeca']">
              <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor</h2>
              <div className="text-xl font-bold mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu justo id nisi dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas eu justo id nisi
                dignissim.
              </div>
              <a
                className="flex w-1/2 text-[#05C9C2] text-xl"
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
        <div className="bg-[#161618] rounded-3xl" style={{ width: '1000px' }}>
          <div className="flex p-20">
            <div className="w-1/2 mr-16 bg-white rounded-3xl h-[400px]"></div>
            <div className="w-1/2 font-['LexendDeca']">
              <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor</h2>
              <div className="text-xl font-bold mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas eu justo id nisi dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas eu justo id nisi
                dignissim.
              </div>
              <a
                className="flex w-1/2 text-[#05C9C2] text-xl"
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
        {/* {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <div className="flex p-20">
              <div className="w-1/2 mr-16 bg-white rounded-3xl h-[400px]"></div>
              <div className="w-1/2 font-['LexendDeca']">
                <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor</h2>
                <div className="text-xl font-bold mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas eu justo id nisi dignissim. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Maecenas eu justo id nisi
                  dignissim.
                </div>
                <a
                  className="flex w-1/2 text-[#05C9C2] text-xl"
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
        ))} */}
      </Slider>
    </div>
  );
}

export default Carousel;
