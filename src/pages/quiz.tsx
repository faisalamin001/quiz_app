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
      <Card questions={questions} />
    </div>
  );
};

export default Quiz;
