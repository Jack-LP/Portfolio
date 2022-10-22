import React from 'react';
import HeroVideo from './HeroVideo';
import HeroText from './HeroText';
import Navbar from '../nav/Navbar';

const Hero = () => {
  return (
    <div id='home' className='h-screen relative overflow-x-hidden'>
      <HeroVideo />
      <Navbar />
      <HeroText />
    </div>
  );
};

export default Hero;
