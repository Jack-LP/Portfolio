import ChevronDown from 'pixelarticons/svg/chevron-down.svg';
import Navbar from './components/common/Navbar';
import NameText from './components/hero/NameText';
import Heading from './components/common/Heading';
import AboutCard from './components/about/AboutCard';

function App() {
  return (
    <div className='min-h-screen w-screen bg-dark-300 text-white font-space px-96'>
      <Navbar />
      <div className='grid'>
        {/* Hero section */}
        <div className='flex flex-col items-center -mt-10 justify-center h-screen'>
          <NameText />
          <img
            src={ChevronDown}
            className='absolute bottom-3 w-10 invert opacity-50 animate-bounceSmall'
            alt=''
          />
        </div>
        {/* About section */}
        <div className='flex h-[50vh] items-center justify-center'>
          <div className='flex flex-col gap-3'>
            <Heading>About me</Heading>
            <AboutCard />
          </div>
        </div>
        {/* Projects section */}

        {/* Contact section */}
      </div>
    </div>
  );
}

export default App;
