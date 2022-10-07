import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';

const HeadingText = () => {
  return (
    <Flex direction='column' gap='4' mt='300px'>
      <Heading size='4xl'>Jack Paget</Heading>
      <Text fontSize='20px' color='whiteAlpha.600'>
        Lorem ipsum dolor sit amet.
      </Text>
    </Flex>
  );
};

export default HeadingText;
