'use client';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQuiz } from '../../store';
import Card from '../../components/Card';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const amount = useQuiz((state) => state.amount);
  const category = useQuiz((state) => state.category);
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=boolean`
    )
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((item: any) => ({
            id: uuidv4(),
            question: item.question,
            answer: item.correct_answer,
          }))
        )
      );
  }, []);

  return (
    <div className='text-center pb-12 sm:pb-16 overflow-hidden	 bg-gradient-to-r from-slate-700 to-slate-900 text-white'>
      <div className='flex justify-between pt-4  sm:justify-around text-xl items-center'>
        <p className='flex justify-center  rounded px-3 py-1  text-red-600 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6 mr-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          False
        </p>{' '}
        <p className='flex justify-center  text-green-600  rounded px-3 py-1  items-center'>
          True{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 ml-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            />
          </svg>
        </p>
      </div>
      <Card questions={questions} />
    </div>
  );
};
export default Quiz;
