import { Flex, Text, Input, SimpleGrid, Button as ChakraButton } from '@chakra-ui/react'

import type { NextPage } from 'next'

import { useState } from 'react';

import { useUserName } from '../hooks/useUserName';
    

const Home: NextPage = () => {
    
  const { setUserName, onToggle } = useUserName();
  const [buttonIsLoading, setButtonIsLoading] = useState<boolean>(false);
  
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

        <SimpleGrid spacingY="2rem">
            <SimpleGrid spacingY="1rem">
              <Text fontSize="xl">Seja muito bem-vindo ao Randcards!</Text>
              <Text fontSize="xl" align="center">Digite seu nome abaixo:</Text>
            </SimpleGrid>

              <SimpleGrid spacingY="3rem">
              <Input
                type="text"
                id='username'
                placeholder="Nome"
                textAlign="center"
                fontWeight="bold"
                _hover={{borderColor: "primary.300"}}
                focusBorderColor="primary.500"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              
              <Flex justifyContent="center">
                  <ChakraButton
                    
                    width="min"
                    bgColor="gray.300"
                    _hover={{bg: "primary.300"}}
                    _focus={{bg: "primary.900" }}
                    type="submit"
                    onClick={() => onToggle()}
                  >
                    Revelar cartas
                  </ChakraButton>
              </Flex>
              </SimpleGrid>
        </SimpleGrid>
        
    </Flex>
  )
}

export default Home


