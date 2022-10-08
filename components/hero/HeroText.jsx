import React from 'react';
import { Flex, Text, Heading, Link } from '@chakra-ui/react';
import { GithubFill, Mention } from 'akar-icons';

const HeroText = () => {
  return (
    <Flex direction='column' gap='4' position='absolute' top='375px'>
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
    </Flex>
  );
};

export default HeroText;
