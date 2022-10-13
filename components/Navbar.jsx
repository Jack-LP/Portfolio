import React from 'react';

const links = ['home', 'about', 'work', 'contact'];

const Navbar = () => {
  return (
    <nav className='container fixed top-6 left-1/2 -translate-x-1/2 flex gap-10 font-mono justify-center text-lg bg-charcoal-100/30 rounded-xl backdrop-blur-xl py-2 z-10 hover:text-white/25 transition duration-300 ease-in-out'>
      {links.map((link, i) => (
        <a
          href={`#${link}`}
          key={link}
          className='flex flex-col items-end hover:text-white transition duration-300 ease-in-out'
        >
          <span className='text-xs'>{`0${i + 1}`}</span>
          <span className='-mt-1'>{`// ${link}`}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
