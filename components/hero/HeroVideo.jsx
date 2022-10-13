import React, { useEffect } from 'react';

const HeroVideo = () => {
  useEffect(() => {
    const vid = document.getElementById('hero-vid');
    vid.play();
  }, []);

  return (
    <>
      <video
        id='hero-vid'
        src='video/hero-vid.webm'
        autoPlay
        muted
        loop
        className='pointer-events-none h-screen w-screen object-cover absolute -z-20'
      />
      <div className='w-screen h-screen absolute bg-gradient-to-t from-charcoal-100 to-transparent backdrop-blur-sm -z-10' />
    </>
  );
};

export default HeroVideo;
