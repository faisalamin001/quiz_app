import { useQuiz } from '../store';
import Link from 'next/link';

const Form = () => {
  const setAmount = useQuiz((state) => state.setAmount);
  const setCategory = useQuiz((state) => state.setCategory);
  const setDifficulty = useQuiz((state) => state.setDifficulty);
  return (
    <div className='w-full p-4 sm:w-1/2 m-auto text-center'>
      <form>
        {/* <div className='mb-6 text-left'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Number of Questions
          </label>
          <input
            min={1}
            max={20}
            type='numeric'
            id='number'
            
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='10'
            required
          />
        </div> */}
        <div>
          <label className='block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white'>
            Number of Questions
          </label>
          <select
            onChange={(e) => setAmount(e.target.value)}
            id='countries'
            className='bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <div>
          <label className='block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white'>
            Select Category
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            id='countries'
            className='bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='21'>Sports</option>
            <option value='23'>History</option>
            <option value='17'>Science</option>
            <option value='22'>Geography</option>
            <option value='24'>Politics</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white'>
            Select Difficulty
          </label>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            id='countries'
            className='bg-gray-50 mb-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>

        <div className='m-auto'>
          <Link href='/quiz'>
            {' '}
            <button
              type='submit'
              className='text-white bg-gray-900 hover:border  font-medium rounded  px-16 py-3.5 m-auto '
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
