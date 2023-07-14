import Navbar from './components/common/Navbar';
import HeroMain from './components/hero/HeroMain';
import AboutMain from './components/about/AboutMain';
import ProjectMain from './components/projects/ProjectMain';

function App() {
  return (
    <div className='min-h-screen w-screen bg-dark-300 text-white font-space px-96 pb-20 grid'>
      <Navbar />
      <HeroMain />
      <AboutMain />
      <ProjectMain />
      {/* Contact section */}
    </div>
  );
}

export default App;
