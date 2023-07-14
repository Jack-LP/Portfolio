import ChevronDown from 'pixelarticons/svg/chevron-down.svg';
import NameText from './NameText';

const HeroMain = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <NameText />
      <img
        src={ChevronDown}
        className='absolute bottom-3 w-10 invert opacity-50 animate-bounceSmall'
        alt=''
      />
    </div>
  );
};
export default HeroMain;
