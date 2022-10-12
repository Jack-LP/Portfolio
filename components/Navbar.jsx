import React from 'react';

const links = ['home', 'work', 'tech', 'about'];

const Navbar = () => {
  return (
    <nav className='container mx-auto flex gap-10 font-mono justify-center text-lg bg-charcoal/30 rounded-xl backdrop-blur-md py-1'>
      {links.map((link, i) => (
        <a href='' key={link} className='flex flex-col items-end'>
          <span className='text-xs text-white/75'>{`0${i + 1}`}</span>
          <span className='-mt-1'>{`// ${link}`}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
