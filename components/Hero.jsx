import React from 'react';
import { Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Image
      src='img/hero.jpg'
      alt=''
      position='absolute'
      zIndex='-10'
      top='0'
      w='100vw'
      h='100vh'
      objectFit='cover'
    />
  );
};

export default Hero;
