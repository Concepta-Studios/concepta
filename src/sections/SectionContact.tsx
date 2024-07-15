import { useState } from 'react';
import DevicesPic from '../pics/devices.png';

function SectionContact() {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch(
      'https://email-with-resend.shtabnoy.workers.dev/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  };

  return (
    <div
      id="contactUs"
      className="bg-black text-white sm:py-16 px-10 overflow-hidden"
    >
      <div className="max-w-screen-2xl flex flex-col sm:flex-row-reverse m-auto">
        <div className="pb-16 sm:px-20 sm:min-w-[560px]">
          <h1 className="font-['AvenirBlack'] text-4xl sm:text-6xl pb-8">
            Kontakta oss
          </h1>
          <div className="text-[#87868B] font-['LexendDeca'] font-light text-base sm:text-xl mb-6 sm:mb-12">
            Oavsett om du redan vet vilken digital lösning du önskar eller är
            osäker och behöver rådgivning är du välkommen att höra av dig till
            oss.
          </div>
          <div className="text-[#87868B] font-['LexendDeca'] font-light text-base sm:text-xl mb-6 sm:mb-12">
            Du kommer märka att vi är supertrevliga, kompetenta, lyhörda och
            lätta att samarbeta med. Vi älskar att jobba med människor och att
            skapa tillsammans!
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" onChange={handleEmailChange} />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <img
          src={DevicesPic}
          className="pb-16 max-h-[800px]"
          alt="Digital solutions"
        />
      </div>
    </div>
  );
}

export default SectionContact;
