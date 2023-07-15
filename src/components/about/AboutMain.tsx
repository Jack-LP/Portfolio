import Heading from '../common/Heading';
import AboutCard from './AboutCard';

const AboutMain = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-3'>
        <Heading>About me</Heading>
        <AboutCard />
      </div>
    </div>
  );
};
export default AboutMain;
