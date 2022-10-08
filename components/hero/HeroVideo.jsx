import React, { useEffect } from 'react';

const HeroVideo = () => {
  useEffect(() => {
    const vid = document.getElementById('hero-vid');
    vid.play();
  }, []);

  return (
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
  );
};

export default HeroVideo;
