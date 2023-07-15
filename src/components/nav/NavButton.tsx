import { X } from 'react-bootstrap-icons';

const NavButton = ({ setShowDrawer }) => {
  return (
    <button
      className='absolute top-3 right-1 p-2 md:hidden text-white'
      onClick={() => setShowDrawer((prev) => !prev)}
    >
      <X className='w-6 h-6' />
    </button>
  );
};

export default NavButton;
