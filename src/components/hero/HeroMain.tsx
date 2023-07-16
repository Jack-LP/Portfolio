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
    <div
      id='home'
      className='h-screen relative flex items-center justify-center md:justify-start'
    >
      <div style={gradientStyle} className='mix-blend-screen absolute'></div>
      <NameText />
      <div className='flex bottom-10 absolute left-1/2 -translate-x-1/2'>
        <a href='#about' className='w-12'>
          <lottie-player
            src='https://lottie.host/071990b9-2fb7-4e9f-9931-592361967780/uHAGXBjMjK.json'
            loop
            autoplay
          ></lottie-player>
        </a>
      </div>
    </div>
  );
};
export default HeroMain;
