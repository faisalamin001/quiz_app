const Form = () => {
  return (
    <div className='w-full sm:w-1/2 m-auto text-center'>
      <form>
        <div className='mb-6 text-left'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Number of Questions
          </label>
          <input
            type='numeric'
            id='number'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='10'
            required
          />
        </div>
        <div>
          <label className='block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white'>
            Select Category
          </label>
          <select
            id='countries'
            className='bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white'>
            Select Difficulty
          </label>
          <select
            id='countries'
            className='bg-gray-50 mb-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className='m-auto'>
          <button
            type='submit'
            className='text-white bg-gray-900 hover:border  font-medium rounded  px-16 py-3.5 m-auto '
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
