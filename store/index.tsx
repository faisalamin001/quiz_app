import { create } from 'zustand';

export const useQuiz = create((set) => ({
  amount: 10,
  category: '',
  difficulty: '',
  setAmount: (amount: number) => set(() => ({ amount })),
  setCategory: (category: string) => set(() => ({ category })),
  setDifficulty: (difficulty: string) => set(() => ({ difficulty })),
}));
