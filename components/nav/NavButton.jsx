import React from 'react';
import { ThreeLineHorizontal, Cross } from 'akar-icons';

const NavButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className='fixed z-20 top-2 right-2 p-2 rounded-full md:hidden bg-white/5 backdrop-blur-md text-white'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? (
        <Cross strokeWidth={2} size={36} />
      ) : (
        <ThreeLineHorizontal strokeWidth={2} size={36} />
      )}
    </button>
  );
};

export default NavButton;
