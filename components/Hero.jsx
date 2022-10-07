import React, { useEffect } from 'react';
import { Image, Box } from '@chakra-ui/react';
import HeadingText from './HeadingText';
import CustomContainer from './CustomContainer';

const Hero = () => {
  useEffect(() => {
    document.getElementById('hero-vid').play();
  }, []);

  return (
    <>
      <Box position='absolute' zIndex='-10' top='0' w='100vw' h='100vh'>
        <video
          autoplay
          muted
          loop
          playsInline
          id='hero-vid'
          style={{ pointerEvents: 'none' }}
        >
          <source src='video/hero-video.webm' type='video/webm' />
        </video>
      </Box>
      <CustomContainer>
        <HeadingText />
      </CustomContainer>
    </>
  );
};

export default Hero;
