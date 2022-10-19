import React, { useState } from 'react';
import NavDrawer from './NavDrawer';
import NavButton from './NavButton';
import BackToTop from './BackToTop';

const links = ['home', 'about', 'work', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${isOpen ? 'hidden' : 'block'}`}>
        <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className='container hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 gap-10 font-mono justify-center text-lg bg-charcoal-100/30 rounded-xl backdrop-blur-xl py-2 z-10 text-white hover:text-white/25 transition duration-300 ease-in-out'>
        {links.map((link, i) => (
          <a
            href={`#${link}`}
            key={link}
            className='flex flex-col items-end  hover:text-white transition duration-300 ease-in-out'
          >
            <span className='text-xs'>{`0${i + 1}`}</span>
            <span className='-mt-1'>{`// ${link}`}</span>
          </a>
        ))}
      </nav>
      <BackToTop />
    </>
  );
};

export default Navbar;
