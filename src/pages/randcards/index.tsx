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
      fetchFiveCardOnce(cards);
    }

  }

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

  function shuffleCards(cards: CardProps[]) {
      let shuffledCards = [...cards];

      shuffledCards = shuffledCards.sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
      
  }

  useEffect(() => {
    
    fetchFiveCardOnce(cards);  

  }, []);

  useEffect(() => {
    cardSize.current = cards.length;
    console.log(cardSize.current);  
  }, [cards])

  return (
    
    <>
      <Flex min-height="90vh" maxHeight="max-content" alignItems="center" justifyContent="center">
        <Flex
          border="2px"
          borderColor="secondary.500"
          borderRadius="2xl"
          boxShadow="md"
          bg="white"
          justifyContent="center"
          min-height="90vh"
          maxHeight="min-content"
          width="75vw"
        >
          <Grid
            my="1rem"
            justifyContent="center"
            alignItems="center"
            templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={6}>
            {cards.map((card: any) => {
              return (
                <Card key={card.id} cardRevealed={card}></Card>
              );
            })}
          </Grid>


        </Flex>
      </Flex>
    </>
  )
}

export default Randomcards;


