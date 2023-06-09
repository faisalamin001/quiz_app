import Link from 'next/link';

const Hero = () => {
  return (
    <div className='text-center py-56  sm:py-24 bg-gradient-to-r from-slate-700 to-slate-900 text-white'>
      <h1 className=' font-bold text-5xl sm:text-9xl capitalize'>
        Put Your{' '}
        <span className='bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent'>
          Skills
        </span>
        <br />
        To The Test!
      </h1>
      <Link href='/selectquiz'>
        <button className='mt-16 text-white bg-gray-900 hover:border  font-medium rounded  px-16 py-3.5 mr-2 mb-2 '>
          Take the Quiz
        </button>
      </Link>
    </div>
  );
};

export default Hero;
