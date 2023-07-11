import { createContext, ReactNode, useState } from "react";

interface AuthContextData {}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState(false);

  const signIn = () => {};
  const signOut = () => {};

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
