import ContactLinks from './ContactLinks';
import Heading from '../common/Heading';
import GithubDisplay from './GithubDisplay';

const ContactMain = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Heading>Contact</Heading>
      <ContactLinks />
      <GithubDisplay />
    </div>
  );
};
export default ContactMain;
