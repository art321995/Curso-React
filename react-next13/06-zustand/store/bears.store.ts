import { create } from 'zustand';

interface BearState{
    bears: number;
    increasePopulation: () => void;
}

export const useBearsStore = create <BearState>()((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    
}));