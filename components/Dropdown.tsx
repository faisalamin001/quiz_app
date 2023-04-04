import { useSession, signOut, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';

const Dropdown = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css'
          rel='stylesheet'
        />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js' />
      </Head>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className=' text-white  font-bold text-lg rounded px-4 py-2.5 text-center inline-flex items-center '
        type='button'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.8}
          stroke='currentColor'
          className='w-8 h-8'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'
          />
        </svg>

        {/* 
        <Image
          loader={() => mySrc}
          src={mySrc}
          alt='user'
          width={50}
          height={50}
          className='rounded-full'
        /> */}
      </button>
      <div
        id='dropdown'
        className='z-10 hidden bg-white divide-y divide-gray-100 rounded w-44 dark:bg-slate-900 shadow-[rgba(250,_250,_250,_0.2)_1px_10px_30px]'
      >
        <ul
          className='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDefaultButton'
        >
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b border-slate-600'
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b border-slate-600'
            >
              Settings
            </a>
          </li>

          <li>
            <a
              href='#'
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 font-bold text-red-500'
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
