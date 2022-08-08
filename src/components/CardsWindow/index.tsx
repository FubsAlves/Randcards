import { Flex, Grid, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card } from '../Card';

import { useRandomCards } from '../../hooks/useRandomCards';


export function CardWindow() {
  const { cards, fetchCard } = useRandomCards();
  const [cardsLoading, setcardsLoading] = useState<boolean>(true);
  
  async function fetchFiveCardOnce() {
    for(let i =0; i < 5; i++) {
        await fetchCard();
    }
    setcardsLoading(false);
  }


  useEffect(() => {
    
    fetchFiveCardOnce();  

  }, []);

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