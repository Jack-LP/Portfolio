import React from 'react';
import HeroVideo from './HeroVideo';
import HeroText from './HeroText';
import Navbar from '../Navbar';

const Hero = () => {
  return (
    <div id='home' className='h-screen relative'>
      <HeroVideo />
      <Navbar />
      <HeroText />
    </div>
  );
};

export default Hero;
