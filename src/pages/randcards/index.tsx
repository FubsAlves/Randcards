import { Flex, Text, SimpleGrid, Button as ChakraButton, Grid } from '@chakra-ui/react';
import { Card } from '../../components/Card';

import axios from 'axios';

import { loremIpsum } from "lorem-ipsum";
import { nanoid } from 'nanoid'

import type { NextPage } from 'next';

import { useEffect, useRef } from 'react';
import { useRandomCards } from '../../hooks/useRandomCards';

interface CardProps {
  id: string;
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
      
      data.id = nanoid();
      data.name = loremIpsum({ count: 1 });
      data.description = loremIpsum();
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
    
    <Flex height="90vh" alignItems="center" justifyContent="center">
        <Flex
          border="2px"
          borderColor="secondary.500"
          borderRadius="2xl"
          boxShadow="md"
          bg="white" 
          justifyContent="center" 
          height="90vh" 
          width="75vw"
        >
          <Grid mt="3rem" templateColumns='repeat(4, 1fr)' gap={6}>
              {cards.map((card: any) => {
                return (
                  <Card cardRevealed={card}></Card>
                )
              })}
          </Grid>
          
      </Flex>
    </Flex>
  )
}

export default Randomcards;
