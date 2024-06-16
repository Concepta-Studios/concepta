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

interface BlockProps {
  name: string;
  description: string;
  url: string;
}

function Block({ name, description, url }: BlockProps) {
  return (
    <div className="bg-[#161618] rounded-3xl xl:w-[1000px]">
      <div className="flex flex-col sm:flex-row px-8 py-8 sm:px-20 sm:py-20">
        <h2 className="text-xl sm:text-4xl font-bold mb-6 sm:hidden">{name}</h2>
        <div className="sm:block sm:w-1/2 mb-6 sm:mb-0 sm:mr-16 bg-neutral-400 rounded-xl h-[180px] sm:h-[400px]"></div>
        <div className="sm:w-1/2 font-['LexendDeca']">
          <h2 className="hidden sm:block text-xl sm:text-4xl font-bold mb-10">
            {name}
          </h2>
          <div className="text-[#87868B] text-base sm:text-xl font-bold mb-6 sm:mb-10">
            {description}
          </div>
          <a
            className="flex w-full text-[#05C9C2] text-base sm:text-xl"
            href="https://example.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-2">{url}</span>
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

  const info = [
    {
      name: 'Konsul Berghs Stiftelse',
      description:
        'Konceptutveckling, rådgivning, UX och design samt framtagande av CMS.',
      url: 'Besök Konsul Berghs hemsida',
    },
    {
      name: 'Beijerstiftelsen',
      description:
        'Konceptutveckling, rådgivning, UX och design samt framtagande av CMS.',
      url: 'Besök Beijerstiftelsens hemsida',
    },
    {
      name: 'Café Söderberg',
      description: 'UX och design samt framtagande av CMS.',
      url: 'Besök Café Söderbergs hemsida',
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {info.map((item, index) => (
          <Block
            key={index}
            name={item.name}
            description={item.description}
            url={item.url}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
