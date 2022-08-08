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
  fetchCard: any;
  cardsLoading: boolean;
  viewingCards: boolean;
  setViewingCards: any;
  setCards: any;
  setCardsLoading: any;
  cardSize: any;
}

const RandomCardsContext = createContext<RandomCardsContextData>({} as RandomCardsContextData);

export function RandomCardsProvider({ children }: RandomCardsProviderProps): JSX.Element {
  const [cards, setCards] = useState<CardProps[] | []>([]);
  const [viewingCards, setViewingCards] = useState<boolean>(false);
  const [cardsLoading, setCardsLoading] = useState<boolean>(true);
  const cardSize = useRef<number>(cards.length);

  async function overMaxCards() {
    return cardSize.current >= 8 ? true : false;
  }

  async function fetchCard() {
    
    if(await overMaxCards()) {
        return;
    }

    else {
      const fetchedCard = await axios.get("https://randomfox.ca/floof/")
      .then((res) => res.data)
      .then((data) => {
      
      data.id = nanoid();
      data.name = loremIpsum({ 
        count: 1,
        paragraphLowerBound: 1,
        paragraphUpperBound: 1,
        sentenceLowerBound: 1,
        sentenceUpperBound: 1 
      }).replace('.', "");

      data.description = loremIpsum({ 
        count: 1,
        paragraphLowerBound: 1,
        paragraphUpperBound: 3,
        sentenceLowerBound: 2,
        sentenceUpperBound: 3 
      }).replace('.', "");

      data.points = Math.floor(Math.random() * 10) + 1;
      return data;
    }); 
    
    setCards((cards: CardProps[]) => [...cards, fetchedCard]);    

    }
  }

  useEffect(() => {
    cardSize.current = cards.length; 
  }, [cards])

  return (
    <RandomCardsContext.Provider
      value={{
        cards,
        cardsLoading,
        viewingCards,
        setCards,
        setCardsLoading,
        setViewingCards,
        fetchCard,
        cardSize
      }}
    >
      {children}
    </RandomCardsContext.Provider>
  );
}

export function useRandomCards(): RandomCardsContextData {
  const context = useContext(RandomCardsContext);

  return context;
}

