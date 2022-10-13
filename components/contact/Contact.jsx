import React from 'react';
import {
  GithubFill,
  Envelope,
  LinkedinFill,
  LinkedinBoxFill,
} from 'akar-icons';
import GithubDisplay from './GithubDisplay';

const contactLinks = [
  {
    title: 'jackpaget1@gmail.com',
    href: 'mailto:jackpaget1@gmail.com',
    icon: <Envelope />,
  },
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
];

const Contact = () => {
  return (
    <div
      className='bg-charcoal-300 flex flex-col gap-8 py-10'
      style={{
        boxShadow: '0 0 0 100vmax #0e0e0e',
        clipPath: 'inset(0 -100vmax)',
      }}
    >
      <h2 className='font-body font-semibold text-8xl underline decoration-4 decoration-emerald-600 self-center'>
        Contact
      </h2>
      <div className='flex justify-center gap-12'>
        {contactLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
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

{
  /* <CustomContainer>
<Flex direction='column' gap='6' id='contact'>
  <Flex direction='column'>
    <Heading size='xl'>Contact</Heading>
    <Divider
      w='110px'
      border='3px'
      borderColor='teal.500'
      mt='-1'
      zIndex='-1'
    />
  </Flex>
  <Flex bg='charcoal.200' rounded='xl' p='4' gap='4'>
    <Button leftIcon={<EmailIcon w='6' h='6' />} w='full' py='8'>
      Email
    </Button>
    <Button leftIcon={<GithubFill />} w='full' py='8'>
      Github
    </Button>
  </Flex>
</Flex>
</CustomContainer> */
}
