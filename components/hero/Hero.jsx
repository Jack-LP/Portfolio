import React from 'react';
import HeroVideo from './HeroVideo';
import HeroText from './HeroText';
import CustomContainer from '../CustomContainer';
import Navbar from '../Navbar';
import { Box } from '@chakra-ui/react';

const Hero = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <HeroVideo />
      {/* <CustomContainer>
        <HeroText />
      </CustomContainer> */}
    </div>
  );
};

export default Hero;
