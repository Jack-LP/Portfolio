import { ArrowUp } from 'react-bootstrap-icons';

const BackToTop = ({ scrolled }) => {
  return (
    <a
      href='#home'
      className={`${
        scrolled ? 'opacity-100' : 'opacity-0'
      } md:hidden fixed bottom-5 right-2 bg-dark-200/50 backdrop-blur-sm border-2 border-dark-100 rounded-md p-2 transition duration-200 ease-out`}
    >
      <ArrowUp className='w-6 h-6 text-white' />
    </a>
  );
};
export default BackToTop;
