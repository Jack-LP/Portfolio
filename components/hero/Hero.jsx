import React from 'react';
import HeroVideo from './HeroVideo';
import HeroText from './HeroText';
import CustomContainer from '../CustomContainer';
import Navbar from '../Navbar';
import { Box } from '@chakra-ui/react';

const Hero = () => {
  return (
    <div className='h-screen'>
      <HeroVideo />
      <Navbar />
      <HeroText />
    </div>
  );
};

export default Hero;
