import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Flex,
  Image,
  Link,
  useColorMode,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import CustomContainer from './CustomContainer';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <CustomContainer>
      <Flex
        justify='space-between'
        alignItems='center'
        bg='charcoalAlpha.100'
        p='3'
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
        <Flex
          gap='8'
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
        >
          <Link href='#myWork'>My Work</Link>
          <Link href='#aboutMe'>About Me</Link>
          <Link href='#contact'>Contact</Link>
        </Flex>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={() => toggleColorMode()}
            />
          </motion.div>
        </AnimatePresence>
      </Flex>
    </CustomContainer>
  );
};

export default Navbar;
