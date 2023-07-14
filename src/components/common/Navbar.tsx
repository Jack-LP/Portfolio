import Moon from 'pixelarticons/svg/moon.svg';

const Navbar = () => {
  const navLinks = ['About', 'Projects', 'Contact'];

  return (
    <div className='flex gap-10 py-5 items-center'>
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
        <img src={Moon} className='w-4 h-4 invert' alt='' />
      </button>
    </div>
  );
};
export default Navbar;
