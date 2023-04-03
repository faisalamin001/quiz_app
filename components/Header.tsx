import Dropdown from './Dropdown';

export const Header = () => {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='https://flowbite.com' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Quiz App
            </span>
          </a>
          <div className='flex items-center lg:order-2'>
            <Dropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};
