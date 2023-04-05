'use client';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import Link from 'next/link';

const Card = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [allQuestions, setAllQuestions] = useState(questions.length);
  const [correctAnswer, setCorrectAnswer] = useState();
  // swipe function
  const onSwipe = (direction) => {
    setAllQuestions(allQuestions - 1);
    if (correctAnswer === 'True' && direction === 'right') {
      setScore(score + 1);
    } else if (correctAnswer === 'False' && direction === 'left') {
      setScore(score + 1);
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

      {questions.length < 1 && (
        <div>
          {' '}
          <div class=' shadow  p-4 rounded-xl bg-slate-900 max-w-sm h-96	 w-64 border border-slate-200  mx-auto'>
            <div class='animate-pulse'>
              <div class='flex-1 space-y-6 py-1'>
                <div class='h-2 bg-slate-700 rounded'></div>
                <div class='space-y-3'>
                  <div class='grid grid-cols-3 gap-4'>
                    <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                  </div>
                  <div class='h-2 bg-slate-700 rounded'></div>
                  <div class='grid grid-cols-3 gap-4'>
                    <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                  </div>
                </div>
                <div class='h-2 bg-slate-700 rounded'></div>
              </div>
              <div class='flex-1 space-y-6 py-1'>
                <div class='h-2 bg-slate-700 rounded'></div>
                <div class='space-y-3'>
                  <div class='grid grid-cols-3 gap-4'>
                    <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                  </div>
                  <div class='h-2 bg-slate-700 rounded'></div>
                  <div class='grid grid-cols-3 gap-4'>
                    <div class='h-2 bg-slate-700 rounded col-span-2'></div>
                    <div class='h-2 bg-slate-700 rounded col-span-1'></div>
                  </div>
                </div>
                <div class='h-2 bg-slate-700 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {questions.map((item) => (
        <div
          onMouseEnter={() => setCorrectAnswer(item.answer)}
          onTouchStart={() => setCorrectAnswer(item.answer)}
          key={item.question}
        >
          <TinderCard
            className='bg-slate-900 rounded-xl z-50	 tracking-wider leading-loose	h-96	 w-64 border border-slate-200  cursor-pointer  px-4 py-12 text-xl absolute m-auto left-0 right-0'
            onSwipe={onSwipe}
            preventSwipe={['up', 'down']}
          >
            {item.question}
          </TinderCard>
        </div>
      ))}
      {questions.length > 0 && (
        <div className='text-center '>
          <p className='text-9xl font-bold animate-pulse'>
            {score}/{questions.length}
          </p>
          <Link href='/selectquiz'>
            <p className='mt-24 rounded m-auto bg-slate-900 py-3 px-8 w-48'>
              Start again
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
