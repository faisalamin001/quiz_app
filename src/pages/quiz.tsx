import { useEffect, useState } from 'react';
import { useQuiz } from '../../store';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const amount = useQuiz((state) => state.amount);
  const difficulty = useQuiz((state) => state.difficulty);
  const category = useQuiz((state) => state.category);
  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=boolean`
    )
      .then((res) => res.json())
      .then((data) =>
        setQuestions(
          data.results.map((item: any) => ({
            question: item.question,
            answer: item.correct_answer,
          }))
        )
      );
  }, []);

  console.log(questions);

  return <div></div>;
};

export default Quiz;
