const Button = ({ children }) => {
  return (
    <button className='bg-plum-200 font-spaceMono rounded-md px-2 py-1 w-full'>
      {children}
    </button>
  );
};
export default Button;
