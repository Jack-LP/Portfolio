import React from 'react';
import { Flex, Text, Link, Container } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Container maxW='1200px' pt='25px'>
      <Flex
        justify='space-between'
        alignItems='center'
        bg='charcoal.300'
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
    </Container>
  );
};

export default Navbar;
