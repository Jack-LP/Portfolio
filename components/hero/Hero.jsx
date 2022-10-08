import React, { useEffect } from 'react';
import HeroVideo from './HeroVideo';
import HeroText from './HeroText';
import CustomContainer from '../CustomContainer';

const Hero = () => {
  return (
    <>
      <HeroVideo />
      <CustomContainer>
        <HeroText />
      </CustomContainer>
    </>
  );
};

export default Hero;
