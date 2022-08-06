import { Flex, Text, SimpleGrid, Button as ChakraButton } from '@chakra-ui/react';
import axios from 'axios';

import type { NextPage } from 'next';

import { useEffect, useRef } from 'react';
import { useRandomCards } from '../../hooks/useRandomCards';

interface CardProps {
  link: string;
  image: string;
  name: string;
  description: string;
  points: number;
}
    
const Randomcards: NextPage = () => {
  const { cards, setCards } = useRandomCards();
  const cardSize = useRef<number>(cards.length);

  async function fetchFiveCardOnce(cards: CardProps[]) {
    if(cardSize.current > 3) {
      return;
    }
    else {
      await fetchCard();
      console.log(cardSize);
      fetchFiveCardOnce(cards);
    }

  }

  async function fetchCard() {
    const fetchedCard = await axios.get("https://randomfox.ca/floof/")
    .then((res) => res.data)
    .then((data) => {
      data.name = "Fubs";
      data.description = "AUAU";
      data.points = Math.floor(Math.random() * 10) + 1;
      return data;
    }); 

    setCards((cards: CardProps[]) => [...cards, fetchedCard]);

  }

  useEffect(() => {
    
    fetchFiveCardOnce(cards);  

  }, []);

  useEffect(() => {
    console.log(cards);
    cardSize.current = cards.length;
  }, [cards])

  return (
    <Flex
      border="0"
      borderRadius="2xl"
      position="absolute"
      left="25vw"
      top="25vh"
      alignItems="center" 
      bg="white" 
      justifyContent="center" 
      height="50vh" 
      width="50vw">
        
        {
          cards.map( (card : any) => (
            <img key={card.link} src={card.image} alt="AUAU" width="250px" height="250px" />
          )
            
          )
        }
    </Flex>
  )
}

export default Randomcards;