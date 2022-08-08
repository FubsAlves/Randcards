import { Flex, Grid, Spinner } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../Card';


import axios from 'axios';

import { loremIpsum } from "lorem-ipsum";
import { nanoid } from 'nanoid'
import { useRandomCards } from '../../hooks/useRandomCards';

interface CardProps {
        id: string;
        link: string;
        image: string;
        name: string;
        description: string;
        points: number;
}

export function CardWindow() {
  const { cards, setCards } = useRandomCards();
  const cardSize = useRef<number>(cards.length);
  const [cardsLoading, setcardsLoading] = useState<boolean>(true);
  
  async function fetchFiveCardOnce() {
    for(let i =0; i < 5; i++) {
        await fetchCard();
    }
    setcardsLoading(false);
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

  useEffect(() => {
    
    fetchFiveCardOnce();  

  }, []);

  useEffect(() => {
    cardSize.current = cards.length;
    console.log(cardSize.current);  
  }, [cards])

    return (
        
        <>
    
            <Flex min-height="90vh" maxHeight="content" alignItems="center" justifyContent="center">   
                <Flex
                    border="2px"
                    borderColor="secondary.500"
                    borderRadius="2xl"
                    boxShadow="md"
                    bg="secondary.500"
                    justifyContent="center"
                    min-height="90vh"
                    maxHeight="content"
                    width="75vw"
                >
                    {!cardsLoading ?
                        <Grid
                        my="1rem"
                        justifyContent="center"
                        alignItems="center"
                        
                        templateColumns={{ 
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)", 
                            lg: "repeat(3, 1fr)" 
                        }}

                        gap={6}
                        >

                        {cards.map((card: any) => {
                        return (
                            <Card key={card.id} cardRevealed={card}></Card>
                        );
                        })}
                    </Grid>

                    : 
                    
                    <Flex minH="90vh" minW="100vh" justifyContent="center" alignItems="center">
                        <Spinner size="xl"></Spinner>
                    </Flex>

                    }
                    
                </Flex>
            </Flex>   
        </>
    )
}