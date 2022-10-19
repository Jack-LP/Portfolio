import React from 'react';
import NavButton from './NavButton';
import { NextjsFill } from 'akar-icons';

const links = ['home', 'about', 'work', 'contact'];

const NavDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } flex right-0 md:hidden fixed z-30 h-screen w-[65vw] bg-charcoal-100/50 backdrop-blur-md justify-center pt-24 rounded-l-lg duration-500 ease-in-out text-white`}
    >
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='flex flex-col gap-6 font-mono'>
        {links.map((link, i) => (
          <a
            href={`#${link}`}
            key={link}
            className='hover:text-white transition duration-300 ease-in-out'
            onClick={() => setIsOpen(false)}
          >
            <span className='text-xl'>{`// ${link}`}</span>
          </a>
        ))}
      </div>
      <div className='flex flex-col gap-2 absolute bottom-4 font-mono text-white/60 items-center'>
        <span>
          <span className='font-body'>&copy;</span> Jack Paget 2022
        </span>
        <div className='flex gap-2 items-center text-white/30'>
          <span className='text-xs'>Built with</span>
          <NextjsFill strokeWidth={2} size={16} />
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
