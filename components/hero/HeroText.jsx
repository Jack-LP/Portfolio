import React from 'react';
import { Flex, Text, Heading, Link } from '@chakra-ui/react';
import { GithubFill, Mention } from 'akar-icons';

const HeroText = () => {
  return (
    <Flex direction='column' gap='4' position='absolute' top='375px'>
      <Heading size='4xl'>Jack Paget</Heading>
      <Text fontSize='20px' color='whiteAlpha.600'>
        Lorem ipsum dolor sit amet.
      </Text>
      <Flex gap='2'>
        <Link href='https://www.github.com/jack-lp'>
          <GithubFill color='#ffffff75' />
        </Link>
        <Link href='https://www.github.com/jack-lp'>
          <Mention color='#ffffff75' />
        </Link>
      </Flex>
    </Flex>
  );
};

export default HeroText;
