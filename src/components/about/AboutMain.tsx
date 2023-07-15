import Heading from '../common/Heading';
import AboutCard from './AboutCard';

const AboutMain = () => {
  return (
    <div id='about' className='flex items-center justify-center pt-20'>
      <div className='flex flex-col gap-4'>
        <Heading>About me</Heading>
        <AboutCard />
      </div>
    </div>
  );
};
export default AboutMain;
