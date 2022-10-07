import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';

const Navbar = () => {
  return (
    <CustomContainer pt='25px'>
      <Flex
        justify='space-between'
        alignItems='center'
        bg='charcoalAlpha.100'
        p='5'
        backdropFilter='blur(8px)'
        rounded='lg'
      >
        <Text>epic logo</Text>
        <Flex gap='8'>
          <Link>My Work</Link>
          <Link>About Me</Link>
          <Link>Contact</Link>
        </Flex>
        <Text>toggle color</Text>
      </Flex>
    </CustomContainer>
  );
};

export default Navbar;
