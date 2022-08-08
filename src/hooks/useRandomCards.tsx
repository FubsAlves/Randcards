import axios from 'axios';
import { loremIpsum } from 'lorem-ipsum';
import { nanoid } from 'nanoid';
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface RandomCardsProviderProps {
  children: ReactNode;
}

interface CardProps {
  id: string;
  link: string;
  image: string;
  name: string;
  description: string;
  points: number;
}

interface RandomCardsContextData {
  cards: CardProps[];
  cardsLoading: boolean;
  viewingCards: boolean;
  setViewingCards: any;
  setCards: any;
  setCardsLoading: any;
}

const RandomCardsContext = createContext<RandomCardsContextData>({} as RandomCardsContextData);

export function RandomCardsProvider({ children }: RandomCardsProviderProps): JSX.Element {
  const [cards, setCards] = useState<CardProps[] | []>([]);
  const [viewingCards, setViewingCards] = useState<boolean>(false);
  const [cardsLoading, setCardsLoading] = useState<boolean>(true);

  return (
    <RandomCardsContext.Provider
      value={{ cards, cardsLoading, viewingCards, setCards, setCardsLoading, setViewingCards }}
    >
      {children}
    </RandomCardsContext.Provider>
  );
}

export function useRandomCards(): RandomCardsContextData {
  const context = useContext(RandomCardsContext);

  return context;
}

