import ArrowLongRightIcon from '../icons/ArrowLongRightIcon';
import ChameleonPic from '../pics/chameleon3.png';

function SectionServices() {
  return (
    <div
      id="services"
      className="bg-black text-white py-16 sm:py-32 px-10 overflow-hidden"
    >
      <div className="max-w-screen-2xl max-h-[900px] flex flex-col sm:flex-row m-auto">
        <div className="sm:min-w-[560px] mb-0 sm:mr-20">
          <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8">
            Rätt kompetens till rätt pris
          </h1>
          <div className="text-[#87868B] font-['LexendDeca'] font-light text-md sm:text-xl mb-8 sm:mb-12">
            Vi strävar efter att skapa långsiktiga relationer med våra kunder.
            Vi är specialister på UX/UI, design, webbutveckling, CMS och att
            skapa innehåll. Oavsett om du behöver en byråpartner eller en
            konsult med spetskompetens till ditt företag är vi säkra på att vi
            kan ge dig den lösning du är i behov av. Med vårt team och stora
            kontaktnät ser vi alltid till att ha rätt kompetens för dig.
          </div>
          <div className="flex font-['LexendDeca'] font-light text-md sm:text-xl">
            <a className="flex w-1/2 text-[#05C9C2]" href="/contact">
              <span className="mr-2">Kontakta oss</span>
              <ArrowLongRightIcon />
            </a>
          </div>
        </div>
        <img className="min-w-[1408px]" src={ChameleonPic} alt="Chameleon" />
      </div>
      <div className="max-w-screen-2xl m-auto ">
        <h1
          id="aboutUs"
          className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8"
        >
          Några av våra tjänster
        </h1>
        <div className="font-['LexendDeca'] font-light text-xl max-w-screen-2xl flex flex-col sm:flex-row m-auto justify-between">
          <div className="pb-10 max-w-[350px] sm:mr-20">
            <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3 text-[#d1b104]">
              UX och design
            </h2>
            <div className="text-[#87868B] text-base">
              Vi skapar väldesignade digitala lösningar. Innan produktion
              genererar vi interaktiva prototyper så att vi kan optimera den
              digitala upplevelsen - både för dig och dina kunder.
            </div>
          </div>
          <div className="pb-10 max-w-[350px] sm:mr-20">
            <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3 text-[#d16b04]">
              Webbutveckling
            </h2>
            <div className="text-[#87868B] text-base">
              Vi har erfarna utvecklare med spetskompetens inom en rad tekniker
              och plattformar. Det gör att vi kan skräddarsy lösningar efter era
              unika behov och önskemål.
            </div>
          </div>
          <div className="pb-10 max-w-[350px]">
            <h2 className="font-['AvenirBlack'] text-2xl mb-2 sm:mt-3 text-[#b903d1]">
              CMS
            </h2>
            <div className="text-[#87868B] text-base">
              Webbplatser ska inte bara vara snygga utan även vara säkra och
              enkla att hantera och administrera. Vi ser till att du har rätt
              plattform och verktyg för dina behov.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionServices;
