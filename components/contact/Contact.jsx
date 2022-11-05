import React from 'react';
import { GithubFill, Envelope, LinkedinBoxFill } from 'akar-icons';
import GithubDisplay from './GithubDisplay';

const contactLinks = [
  {
    title: 'Jack-LP',
    href: 'https://www.github.com/jack-lp',
    icon: <GithubFill />,
  },
  {
    title: 'Jack Paget',
    href: 'https://www.github.com/jack-lp',
    icon: <LinkedinBoxFill />,
  },
  {
    title: 'jackpaget1@gmail.com',
    href: 'mailto:jackpaget1@gmail.com',
    icon: <Envelope />,
  },
];

const Contact = () => {
  return (
    <div
      id='contact'
      className='bg-charcoal-300 flex flex-col gap-8 py-10 text-white'
      style={{
        boxShadow: '0 0 0 100vmax #0e0e0e',
        clipPath: 'inset(0 -100vmax)',
      }}
    >
      <h2 className='font-body font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl underline decoration-4 decoration-cyan-600 self-center'>
        Contact
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12'>
        {contactLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 font-mono'
          >
            {link.icon}
            {link.title}
          </a>
        ))}
      </div>
      <GithubDisplay />
    </div>
  );
};

export default Contact;
