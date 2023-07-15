import { ChevronDown } from 'react-bootstrap-icons';
import NameText from './NameText';

const HeroMain = () => {
  const gradientStyle = {
    background:
      'url(img/grain.png), radial-gradient(circle farthest-corner at 0 0, #000 30%, #a899fb 65%, #732fc9 80%, #c1f1ff 110%) no-repeat, radial-gradient(closest-side at 60% 50%, #732fc9 20%, #000 100%) no-repeat',
    transform: 'translateZ(0)',
    top: '7%',
    right: '-65%',
    height: '100%',
    width: '200%',
    backgroundSize: '140px, 100%, cover',
    backgroundBlendMode: 'overlay',
  };

  return (
    <div className='h-screen relative flex items-center'>
      <div style={gradientStyle} className='mix-blend-screen absolute'></div>
      <NameText />
      <div className='flex items-center justify-center absolute top-[870px] w-full'>
        <ChevronDown className='opacity-50 animate-bounceSmall' />
      </div>
    </div>
  );
};
export default HeroMain;
