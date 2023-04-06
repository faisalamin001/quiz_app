import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useFetch(url: string) {
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        fetch(url)
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
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { questions, error, loading };
}
