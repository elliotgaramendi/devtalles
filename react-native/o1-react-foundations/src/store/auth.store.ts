import { create } from "zustand";

interface AuthState {
  status: 'authenticated' | 'unauthenticated' | 'checking';
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: 'checking',
  token: undefined,
  user: undefined,
  signIn: (email, password) => {
    if (password === '123456') {
      set({
        status: 'authenticated',
        token: 'CKT294',
        user: {
          name: 'Elliot Garamendi',
          email
        }
      });
    } else {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined
      });
    }
  },
  signOut: () => {
    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined
    });
  },
}));