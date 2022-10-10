import React, { useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const HeroVideo = () => {
  useEffect(() => {
    const vid = document.getElementById('hero-vid');
    vid.play();
  }, []);

  return (
    <>
      <video
        autoplay
        muted
        loop
        playsInline
        id='hero-vid'
        src='video/hero-video.webm'
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          height: '100vh',
          objectFit: 'cover',
          width: '100vw',
          zIndex: '-10',
        }}
      />
      <Box
        w='100vw'
        h='100vh'
        position='absolute'
        bg={`linear-gradient(0deg, ${useColorModeValue(
          '#EDF2F7',
          '#252525'
        )} 0%, transparent 50%)`}
        zIndex='-1'
        backdropFilter='blur(4px)'
      />
    </>
  );
};

export default HeroVideo;
