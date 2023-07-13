import Navbar from './components/common/Navbar';
import NameText from './components/hero/NameText';

function App() {
  return (
    <div className='min-h-screen w-screen bg-dark-300 text-white font-space px-96'>
      <Navbar />
      <div className='flex items-center justify-center mt-80'>
        <NameText />
      </div>
    </div>
  );
}

export default App;
