import { createContext, ReactNode, useContext, useState } from 'react';


interface RandomCardsProviderProps {
  children: ReactNode;
}

interface CardsProps {
    link: string;
    name: string;
    description: string;
    points: number;
}


interface RandomCardsContextData {
  cards: CardsProps[];
  setCards: (value: []) => void;
}

const RandomCardsContext = createContext<RandomCardsContextData>({} as RandomCardsContextData);

export function RandomCardsProvider({ children }: RandomCardsProviderProps): JSX.Element {
  const [cards, setCards] = useState<CardsProps[] | []>([]);
  return (
    <RandomCardsContext.Provider
      value={{cards, setCards}}
    >
      {children}
    </RandomCardsContext.Provider>
  );
  
  };


export function useRandomCards(): RandomCardsContextData {
  const context = useContext(RandomCardsContext);

  return context;
}