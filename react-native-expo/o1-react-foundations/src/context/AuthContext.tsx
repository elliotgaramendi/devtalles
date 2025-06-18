import { createContext, useContext, type PropsWithChildren } from "react";

interface AuthState {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={{
      user: {
        name: 'Elliot Garamendi',
        email: 'elliotgaramendi@gmail.com',
        image: 'https://avatars.githubusercontent.com/elliotgaramendi',
      },
    }}>
      {children}
    </AuthContext.Provider>
  );
};