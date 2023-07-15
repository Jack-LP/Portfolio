import Navbar from './components/common/Navbar';
import HeroMain from './components/hero/HeroMain';
import AboutMain from './components/about/AboutMain';
import ProjectMain from './components/projects/ProjectMain';
import ContactMain from './components/contact/ContactMain';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen w-screen bg-dark-300 text-white font-space px-96 flex flex-col gap-96 pb-28 overflow-hidden'>
        <HeroMain />
        <AboutMain />
        <ProjectMain />
        <ContactMain />
      </div>
    </>
  );
}

export default App;
