import { useState } from 'react';
import ContactsPic from '../pics/contacts.png';

function SectionContact() {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch(
      'https://email-with-resend.shtabnoy.workers.dev/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
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
      className="bg-black text-white pb-32 flex flex-col sm:flex-row px-10"
    >
      <img
        className="relative -left-10 sm:w-1/2 mb-10 sm:mb-0 sm:mr-20"
        src={ContactsPic}
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
        <div>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleEmailChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
