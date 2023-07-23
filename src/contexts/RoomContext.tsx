import { createContext, ReactNode, useState } from "react";

interface RoomContextData {
  rollDice: (size: number, amount?: number, amplifier?: number) => void;
  clearDiceValues: () => void;
  diceValues: number[];
}

interface RoomContextProviderProps {
  children: ReactNode;
}

export const RoomContext = createContext({} as RoomContextData);

export const RoomContextProvider = ({ children }: RoomContextProviderProps) => {
  const [diceValues, setDiceValues] = useState<number[]>([]);

  // ============== Dice Funtions Section Start ================
  const rollDice = (size: number, amount = 1, amplifier = 0) => {
    const diceValues: number[] = [];

    for (let i = 0; i < amount; i++) {
      const randomValue = Math.ceil(Math.random() * size);
      const value = randomValue + amplifier;
      diceValues.push(value);
    }

    return setDiceValues(diceValues);
  };

  const clearDiceValues = () => {
    setDiceValues([]);
  };
  // ============== Dice Funtions Section End ================

  return (
    <RoomContext.Provider value={{ rollDice, diceValues, clearDiceValues }}>
      {children}
    </RoomContext.Provider>
  );
};
