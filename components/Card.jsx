'use client';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

const Card = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  // swipe function
  const onSwipe = (direction) => {
    console.log('correct answer', correctAnswer, 'user', direction);
    if (correctAnswer === 'True' && direction === 'right') {
      setScore(score + 1);
    } else if (correctAnswer === 'False' && direction === 'left') {
      setScore(score + 1);
    } else {
      console.log('wrong answer ');
    }
  };

  return (
    <div className=' relative py-24  '>
      <div className='flex justify-between px-4 sm:justify-around mb-16 -mt-10 items-center'>
        <p className='text-center bg-slate-800 rounded px-2 py-0.5'>
          Questions <span className='font-bold'>{questions.length}</span>{' '}
        </p>
        <p className='text-center bg-slate-800 rounded px-2 py-0.5'>
          Score <span className='font-bold'>{score}</span>{' '}
        </p>
      </div>

      {questions.map((item) => (
        <div
          onMouseEnter={() => setCorrectAnswer(item.answer)}
          onTouchStart={() => setCorrectAnswer(item.answer)}
          key={item.question}
        >
          {true ? (
            <TinderCard
              className='bg-slate-900 rounded-xl tracking-wider leading-loose	h-96	 sm:h-80 w-64 border border-slate-200  cursor-pointer  px-4 py-16 text-xl absolute m-auto left-0 right-0'
              onSwipe={onSwipe}
              preventSwipe={['up', 'down']}
            >
              {item.question}
            </TinderCard>
          ) : (
            'hello'
          )}
        </div>
      ))}
      <div className='flex mt-96 pt-20 sm:mt-52 justify-between px-4  sm:justify-around text-xl items-center'>
        <p className='flex justify-center  rounded px-3 py-1  text-red-600 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6 mr-2'
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
    </div>
  );
};

export default Card;
