import React from 'react';
import { Flex, Heading, Divider, Button } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';
import { EmailIcon } from '@chakra-ui/icons';
import { GithubFill } from 'akar-icons';

const Contact = () => {
  return (
    <CustomContainer>
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
    </CustomContainer>
  );
};

export default Contact;
