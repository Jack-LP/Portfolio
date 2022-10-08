import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const HeroVideo = () => {
  useEffect(() => {
    const vid = document.getElementById('hero-vid');
    vid.play();
    vid.playbackRate = 1;
  }, []);

  return (
    <>
      <video
        autoplay
        muted
        loop
        playsInline
        id='hero-vid'
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          height: '100vh',
          objectFit: 'cover',
          width: '100vw',
          zIndex: '-10',
        }}
      >
        <source src='video/hero-video.webm' type='video/webm' />
      </video>
      <Box
        bg='linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 100%)'
        w='100vw'
        h='100vh'
        position='absolute'
        top='0'
        zIndex='-1'
        backdropFilter='blur(4px)'
      />
    </>
  );
};

export default HeroVideo;
