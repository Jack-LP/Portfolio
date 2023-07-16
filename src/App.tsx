import Navbar from './components/nav/Navbar';
import HeroMain from './components/hero/HeroMain';
import AboutMain from './components/about/AboutMain';
import ProjectMain from './components/projects/ProjectMain';
import ContactMain from './components/contact/ContactMain';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen w-screen px-3 md:px-10 xl:px-72 2xl:px-96 bg-dark-300 text-white font-space flex flex-col gap-32 md:gap-64 pb-5 md:pb-28 overflow-hidden'>
        <HeroMain />
        <AboutMain />
        <ProjectMain />
        <ContactMain />
      </div>
    </>
  );
}

export default App;
