import React from 'react';
import { Flex, Text, Link, Switch, useColorMode } from '@chakra-ui/react';
import CustomContainer from '../CustomContainer';
import { Moon, Sun } from 'akar-icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Flex alignItems='center' gap='2'>
          {colorMode === 'dark' ? <Moon /> : <Sun />}
          <Switch onChange={() => toggleColorMode()} />
        </Flex>
      </Flex>
    </CustomContainer>
  );
};

export default Navbar;
