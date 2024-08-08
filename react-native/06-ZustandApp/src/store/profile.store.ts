import {create} from 'zustand';

export interface InitialState {
  name: string;
  email: string;
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<InitialState>()((set, get) => ({
  name: 'Elliot Garamendi',
  email: 'elliotgaramendi@gmail.com',
  changeProfile(name, email) {
    console.log(get());
    set({name, email});
  },
}));
