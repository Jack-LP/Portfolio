import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const FooterVideo = () => {
  useEffect(() => {
    const vid = document.getElementById('footer-vid');
    vid.play();
  }, []);

  return (
    <>
      <video
        autoplay
        muted
        loop
        playsInline
        id='footer-vid'
        src='video/footer-video.webm'
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          height: '50vh',
          objectFit: 'cover',
          width: '100vw',
          zIndex: '-10',
        }}
      />
      <Box
        w='100vw'
        h='50vh'
        position='absolute'
        bg='linear-gradient(180deg, rgba(37,37,37,1) 0%, transparent 50%)'
        zIndex='-1'
        backdropFilter='blur(4px)'
      />
    </>
  );
};

export default FooterVideo;
