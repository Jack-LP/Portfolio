import React from 'react';
import { Flex, Image, Link, Switch, useColorMode } from '@chakra-ui/react';
import CustomContainer from './CustomContainer';
import { Moon, Sun } from 'akar-icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <CustomContainer>
      <Flex
        justify='space-between'
        alignItems='center'
        bg='charcoalAlpha.100'
        p='5'
        backdropFilter='blur(8px)'
        rounded='lg'
        position='absolute'
        w='100%'
        top='6'
      >
        <Link>
          <Image
            src='img/jp-logo.svg'
            alt='JP'
            w='8'
            position='absolute'
            top='1.5'
            _hover={{
              transform: 'rotate(-10deg)',
            }}
            transition='.1s ease-out'
          />
        </Link>
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
