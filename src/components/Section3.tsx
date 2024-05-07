import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';

function Section3() {
  return (
    <div className="bg-black text-white pb-32 px-10">
      <div className="max-w-screen-2xl m-auto">
        <h1 className="font-['AvenirBlack'] text-6xl pb-8 text-center">
          Some of our cases
        </h1>
        <div className="bg-[#161618] w-full h-[600px] rounded-3xl p-20 flex">
          <div className="w-1/2 mr-16 bg-white rounded-3xl"></div>
          <div className="w-1/2 font-['LexendDeca']">
            <h2 className="text-4xl font-bold mb-10">Lorem ipsum dolor</h2>
            <div className="text-xl font-bold mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu justo id nisi dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas eu justo id nisi dignissim.
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
    </div>
  );
}

export default Section3;
