import { useQuiz } from '../../store';

const Quiz = () => {
  const amount = useQuiz((state) => state.amount);
  const setAmount = useQuiz((state) => state.setAmount);
  return (
    <div>
      <br />
      amount{amount}
      <br />
      <button onClick={() => setAmount(20)}>set amount to 20</button>
    </div>
  );
};

export default Quiz;
