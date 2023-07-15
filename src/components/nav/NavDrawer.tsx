import NavButton from './NavButton';

const NavDrawer = ({ showDrawer, setShowDrawer }) => {
  const navLinks = ['home', 'about', 'projects', 'contact'];

  return (
    <div
      className={`${
        showDrawer ? 'translate-x-0' : 'translate-x-full'
      } flex right-0 md:hidden fixed z-30 h-screen w-[65vw] bg-dark-300/50 backdrop-blur-md justify-center pt-24  text-white`}
    >
      <NavButton setShowDrawer={setShowDrawer} />
      <div className='flex flex-col gap-6 font-space'>
        {navLinks.map((link) => (
          <a
            href={`#${link}`}
            key={link}
            className='hover:text-plum-100 transition duration-150 text-xl capitalize'
            onClick={() => setShowDrawer(false)}
          >
            {link}
          </a>
        ))}
      </div>
      <div className='flex flex-col gap-2 absolute bottom-16 font-spaceMono text-white/60 items-center'>
        <span>
          <span className='font-space'>&copy;</span> Jack Paget 2023
        </span>
        <div className='flex gap-2 items-center opacity-30'>
          <span className='text-xs'>Built with</span>
          <img src='/img/icons/react.svg' alt='' className='w-4 invert' />
        </div>
      </div>
    </div>
  );
};
export default NavDrawer;
