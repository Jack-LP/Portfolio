import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import Heading from '../common/Heading';
import GithubDisplay from './GithubDisplay';

const ContactMain = () => {
  const contactLinks = [
    {
      icon: <Github size={20} />,
      link: 'https://www.github.com/Jack-LP',
      text: 'Jack-LP',
    },
    { icon: <Linkedin size={20} />, link: '', text: 'Jack Paget' },
    {
      icon: <Envelope size={20} />,
      link: 'mailto:jackpaget1@gmail.com',
      text: 'jackpaget1@gmail.com',
    },
  ];

  return (
    <div className='flex flex-col gap-3'>
      <Heading>Contact</Heading>
      <div className='flex gap-3 font-spaceMono'>
        {contactLinks.map((item) => (
          <a
            key={item.text}
            href={item.link}
            target='_blank'
            className='flex gap-2 items-center'
          >
            {item.icon}
            <p>{item.text}</p>
          </a>
        ))}
      </div>
      <GithubDisplay />
    </div>
  );
};
export default ContactMain;
