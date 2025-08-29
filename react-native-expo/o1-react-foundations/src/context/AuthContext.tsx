/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface AuthState {
  status: AuthStatus;
  isChecking: boolean;
  isAuthenticated: boolean;
  token?: string;
  user?: User | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface User {
  name: string;
  email: string;
  image: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string) => {
    if (email === 'elliotgaramendi@base2.com' && password === 'theMostSecretPassword') {
      setUser({ name: 'Elliot Garamendi', email, image: 'https://avatars.githubusercontent.com/elliotgaramendi' });
      setStatus('authenticated');
    } else {
      alert('Invalid credentials');
    }
  };

  const signOut = () => {
    setUser(null);
    setStatus('unauthenticated');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('unauthenticated');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthContext.Provider value={{
      status,
      isChecking: status === 'checking',
      isAuthenticated: status === 'authenticated',
      user,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};