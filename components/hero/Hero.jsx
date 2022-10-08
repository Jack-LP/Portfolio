import React from 'react';
import HeroVideo from './HeroVideo';
import HeroText from './HeroText';
import CustomContainer from '../CustomContainer';
import Navbar from '../Navbar';
import { Box } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box h='100vh'>
      <Navbar />
      <HeroVideo />
      <CustomContainer>
        <HeroText />
      </CustomContainer>
    </Box>
  );
};

export default Hero;
