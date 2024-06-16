import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import DigitalSolutionsPic from '../pics/digital_solutions_ugly_screenshot.png';

function SectionContact() {
  return (
    <div
      id="contactUs"
      className="bg-black text-white pb-32 flex flex-col sm:flex-row px-10"
    >
      <img
        className="relative -left-10 sm:w-1/2 mb-10 sm:mb-0 sm:mr-20"
        src={DigitalSolutionsPic}
        alt="Digital solutions"
      />
      <div className="sm:w-1/2 sm:pl-20 sm:pr-20">
        <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8">
          Kontakta oss
        </h1>
        <div className="text-[#87868B] font-['LexendDeca'] font-light text-base sm:text-xl mb-6 sm:mb-12">
          Oavsett om du redan vet vilken digital lösning du önskar eller är
          osäker och behöver rådgivning är du välkommen att höra av dig till
          oss.
        </div>
        <div className="text-[#87868B] font-['LexendDeca'] font-light text-base sm:text-xl mb-6 sm:mb-12">
          Du kommer märka att vi är supertrevliga, kompetenta, lyhörda och lätta
          att samarbeta med. Vi älskar att jobba med människor och att skapa
          tillsammans!
        </div>
        <div>The form</div>
        {/* <a
          className="flex w-1/2 text-[#05C9C2] text-base sm:text-xl"
          href="/lorem-ipsum"
        >
          <span className="mr-2">Lorem ipsum</span>
          <ArrowLongRightIcon />
        </a> */}
      </div>
    </div>
  );
}

export default SectionContact;
