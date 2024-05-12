import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import Slider from 'react-slick';
import './Carousel.css';

function Carousel() {
  const data = ['1', '2', '3'];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((_, index) => (
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
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
