import { create } from 'zustand';

type QuizState = {
  amount: number;
  category: string;
  difficulty: string;
  setAmount: (amount: number) => void;
  setCategory: (category: string) => void;
  setDifficulty: (difficulty: string) => void;
};

export const useQuiz = create<QuizState>((set) => ({
  amount: 5,
  category: '',
  difficulty: '',
  setAmount: (amount: number) => set(() => ({ amount })),
  setCategory: (category: string) => set(() => ({ category })),
  setDifficulty: (difficulty: string) => set(() => ({ difficulty })),
}));
