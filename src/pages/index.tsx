import { Flex, Text, Input, SimpleGrid, Button as ChakraButton } from '@chakra-ui/react'

import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import { useRandomCards } from '../hooks/useRandomCards';

import { useUserName } from '../hooks/useUserName';
    

const Home: NextPage = () => {
    
  const { setUserName } = useUserName();
  const [buttonLoading, toggleButtonLoading] = useState<boolean>(false); 
  const { setViewingCards } = useRandomCards();

  return (
    
    <Flex height="90vh" alignItems="center" justifyContent="center">
        <Flex
              border="2px"
              borderColor="secondary.500"
              borderRadius="2xl"
              boxShadow="md"
              alignItems="center" 
              bg="white" 
              justifyContent="center" 
              minH={{base: "75vh", sm: "50vh", md: "60vh", lg: "50vh", xl: "60vh"}} 
              minW={{base: "75vw", sm: "60vw", md: "60vw", lg: "50vw", xl: "60vh"}}>

                <SimpleGrid spacingY="2rem">
                    <SimpleGrid spacingY="1rem" textAlign="center" fontSize="xl">
                      <Text fontWeight="bold">Randcards</Text>
                      <Text>Seja muito bem-vindo ao Randcards!</Text>
                      <Text align="center">Digite seu nome abaixo:</Text>
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
                          <Link href="/randcards">
                            <ChakraButton
                              isLoading={buttonLoading}
                              loadingText='Revelando Cartas'
                              width="min"
                              bgColor="gray.300"
                              _hover={{bg: "primary.300"}}
                              _focus={{bg: "primary.900" }}
                              type="submit"
                              onClick={() => {
                                toggleButtonLoading(true);
                                setViewingCards(true);
                                
                              }}
                              
                            > 
                              Revelar cartas
                            </ChakraButton>
                          </Link>
                      </Flex>
                      </SimpleGrid>
                </SimpleGrid>
        </Flex>
    </Flex>
  )
}

export default Home


