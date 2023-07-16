import { useState, useEffect } from 'react';
import { Github, List } from 'react-bootstrap-icons';
import NavDrawer from './NavDrawer';
import BackToTop from './BackToTop';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ['about', 'projects', 'contact'];

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
    <>
      <BackToTop scrolled={scrolled} />
      {showDrawer ? (
        <NavDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      ) : null}
      <div
        className={`${
          scrolled
            ? 'py-2 bg-dark-300/90 backdrop-blur-md border-b-[1px] border-dark-100'
            : 'py-5 border-transparent'
        } flex z-20 gap-10 items-center text-white font-space fixed w-full px-3 md:px-10 xl:px-72 2xl:px-96 duration-150`}
      >
        <a href='#home' className='hover:text-plum-100 transition duration-150'>
          Jack Paget
        </a>
        <ul className='gap-5 text-white/50 hidden md:flex'>
          {navLinks.map((link) => (
            <li
              key={link}
              className='hover:text-plum-100 transition duration-150 cursor-pointer capitalize'
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        <a
          href='https://github.com/Jack-LP/Portfolio'
          target='_blank'
          className='ml-auto hidden md:block'
          title='View source'
        >
          <Github className='w-6 h-6 text-white/50 hover:text-plum-100 transition duration-150' />
        </a>
        <button
          onClick={() => setShowDrawer((prev) => !prev)}
          className={`${showDrawer ? 'hidden' : 'block'} md:hidden ml-auto`}
        >
          <List className='w-6 h-6' />
        </button>
      </div>
    </>
  );
};
export default Navbar;
