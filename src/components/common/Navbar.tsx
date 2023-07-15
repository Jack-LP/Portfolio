import { useState, useEffect } from 'react';
import { Moon } from 'react-bootstrap-icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['About', 'Projects', 'Contact'];

  const handleScroll = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolled
          ? 'py-2 bg-dark-300 border-b-[1px] border-dark-100'
          : 'py-5 border-transparent'
      } flex z-20 gap-10 items-center text-white font-space fixed w-full px-96 duration-150`}
    >
      <a href='/' className='hover:text-plum-100 transition duration-150'>
        Jack Paget
      </a>
      <ul className='flex gap-5 text-white/50'>
        {navLinks.map((link) => (
          <li
            key={link}
            className='hover:text-plum-100 transition duration-150 cursor-pointer'
          >
            {link}
          </li>
        ))}
      </ul>
      <button className='border-2 rounded-md w-8 h-8 border-dark-100 ml-auto flex items-center justify-center'>
        <Moon className='w-4 h-4' />
      </button>
    </div>
  );
};
export default Navbar;
