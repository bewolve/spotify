import { create } from "zustand";

interface Store {
  count: number;
  increase: () => void;
  reset?: () => void;
  update?: (value: number) => void;
}

export const useStore = create<Store>((set) => ({
  count: 0,
  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  reset: () => {
    set({ count: 0 });
  },
  update: (value) => {
    set((state) => ({
      count: state.count + value,
    }));
  },
}));
