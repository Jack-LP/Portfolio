import React from 'react';
import { Flex, Heading, Divider } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';

const Contact = () => {
  return (
    <CustomContainer>
      <Flex direction='column' gap='6'>
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
      </Flex>
    </CustomContainer>
  );
};

export default Contact;
