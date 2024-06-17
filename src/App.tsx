import SectionMain from './sections/SectionMain';
import SectionServices from './sections/SectionServices';
import SectionContact from './sections/SectionContact';
import SectionCases from './sections/SectionCases';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <SectionMain />
      <SectionServices />
      <SectionCases />
      <SectionContact />
      <Footer />
    </>
  );
}

export default App;
