import { createContext, ReactNode } from "react";

interface RoomContextData {}

interface RoomContextProviderProps {
  children: ReactNode;
}

export const RoomContext = createContext({} as RoomContextData);

export const RoomContextProvider = ({ children }: RoomContextProviderProps) => {
  return <RoomContext.Provider value={{}}>{children}</RoomContext.Provider>;
};
