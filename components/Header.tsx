import Link from 'next/link';
import Dropdown from './Dropdown';

export const Header = () => {
  return (
    <header>
      <nav className='bg-white border-b border-slate-700 px-4 lg:px-6 py-2.5 dark:bg-slate-800 '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link href='/' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Quiz App
            </span>
          </Link>
          <div className='flex items-center lg:order-2'>
            <Dropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};
