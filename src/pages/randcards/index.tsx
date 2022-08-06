import { Flex, Text, SimpleGrid, Button as ChakraButton } from '@chakra-ui/react';

import type { NextPage } from 'next';

import { useEffect } from 'react';
import { useRandomCards } from '../../hooks/useRandomCards';
    
const Randomcards: NextPage = () => {
  const { cards, setCards } = useRandomCards();

  async function fetchCards() {
    const newCard = await fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
        data.name = "Fubs";
        data.description = "AUAUAU";
        data.points = Math.floor(Math.random() * 10) + 1;
        return data;
    });    
    
    console.log(cards);

  }

  useEffect(() => {
    
    fetchCards();

  }, []);

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
        
    </Flex>
  )
}

export default Randomcards;