import { useSession, signOut, signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';

const Dropdown = () => {
  const { data: session } = useSession();
  console.log(session);
  const src = session?.user?.image;

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
        className={
          session
            ? ''
            : ' text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700'
        }
        type='button'
      >
        {!session && <div onClick={() => signIn()}> Login</div>}
        {session && (
          <Image
            loader={() => src}
            src={src}
            alt='user'
            width={50}
            height={50}
            className='rounded-full'
          />
        )}
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
              onClick={() => signOut()}
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
