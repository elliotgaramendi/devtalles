import {create} from 'zustand';

interface InitialState {
  count: number;
  incrementBy: (value: number) => void;
}

export const useCounterStore = create<InitialState>()(set => ({
  count: 1,
  incrementBy: value => set(state => ({count: state.count + value})),
}));
