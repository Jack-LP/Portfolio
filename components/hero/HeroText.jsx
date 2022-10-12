import React from 'react';
import { Flex, Text, Heading, Link } from '@chakra-ui/react';
import { GithubFill, Mention } from 'akar-icons';

const HeroText = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full -mt-12'>
      <h1 className='text-[192px] font-body uppercase font-semibold'>
        Jack Paget
      </h1>
      <h2 className='text-2xl font-mono -mt-12 uppercase'>
        front-end developer working with the latest tech.
      </h2>
    </div>
  );
};

export default HeroText;

{
  /* <Flex direction='column' gap='4' position='absolute' top='375px'>
<Heading size='4xl'>Jack Paget</Heading>
<Text fontSize='20px' color='whiteAlpha.600'>
  Front-end devloper
</Text>
<Flex gap='2'>
  <Link
    href='https://www.github.com/jack-lp'
    opacity='0.75'
    _hover={{
      opacity: '1',
    }}
  >
    <GithubFill color='white' />
  </Link>
  <Link
    href='https://www.github.com/jack-lp'
    opacity='0.75'
    _hover={{
      opacity: '1',
    }}
  >
    <Mention color='white' />
  </Link>
</Flex>
</Flex> */
}
