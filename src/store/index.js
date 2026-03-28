import { create } from 'zustand';

const useMacBookStore = create((set) => ({
    // State
    color: '#2e2c2e',
    scale: 0.08,

    // Actions
    setColor: (color) => set({ color }),
    setScale: (scale) => set({ scale }),

    reset: () => set({
        color: '#2e2c2e',
        scale: 0.08
    }),
}));

export default useMacBookStore;