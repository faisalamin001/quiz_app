import { useSession, signIn, signOut } from 'next-auth/react';

export const Header = () => {
  const { data: session } = useSession();

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
            {session ? (
              <a
                onClick={() => signOut()}
                href='#'
                className='text-white bg-blue-900 hover:bg-blue-800  font-medium rounded text-sm px-2 lg:px-3 py-1 lg:py-1.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700  '
              >
                Logout as {session?.user?.name}
              </a>
            ) : (
              <a
                onClick={() => signIn()}
                href='#'
                className='text-white bg-blue-900 hover:bg-blue-800  font-medium rounded text-sm px-2 lg:px-3 py-1 lg:py-1.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700  '
              >
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
