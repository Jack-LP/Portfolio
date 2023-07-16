import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';

const ContactLinks = () => {
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
    <div className='flex flex-col md:flex-row gap-3 font-spaceMono text-white'>
      {contactLinks.map((item) => (
        <a
          key={item.text}
          href={item.link}
          target='_blank'
          className='flex gap-2 items-center hover:text-white/50 transition duration-150'
        >
          {item.icon}
          <p>{item.text}</p>
        </a>
      ))}
    </div>
  );
};
export default ContactLinks;
