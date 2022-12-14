import { AddIcon, UpDownIcon } from '@chakra-ui/icons';
import { Flex, Text, Fade, Button as ChakraButton, Collapse, useToast} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useRandomCards } from '../../hooks/useRandomCards';

import { useUserName } from '../../hooks/useUserName';
import { CardProps } from '../../types/ICard';

export function Header() {
    const { userName, isOpen, onToggle } = useUserName();
    const { cards, setCards, fetchCard, viewingCards, cardSize } = useRandomCards();
    const prevUserName = useRef(0);  
    const toastLimitCards = useToast();

    function shuffleCards(cards: CardProps[]) {
        let shuffledCards = [...cards];
  
        shuffledCards = shuffledCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        
    }

    useEffect(() => {
        if((prevUserName.current === 0 && userName.length >= 1) || (prevUserName.current >= 1 && userName.length === 0)) {
            onToggle();
            prevUserName.current = userName.length;
        }
    }, [userName]);
    

    return (
        <Flex h="3rem" w="100vw" justifyContent="center">
                <Flex w="75vw" justifyContent="space-between">
                    <Flex mt="0.2rem">
                        <Collapse in={viewingCards} animateOpacity>
                            <ChakraButton
                                bg="red.200"
                                maxW={{base: "5vw", sm: "30vw", md: "20vw"}}
                                _hover={{bg: "red.400"}}
                                disabled={!viewingCards}
                                onClick={() => {
                                    if(cardSize.current === 8) {
                                        toastLimitCards({
                                            title: "Limite atingido!",
                                            description: "É permitido apenas 8 cartas",
                                            status: 'error',
                                            duration: 5000,
                                            isClosable: true

                                        })
                                    }
                                    else {
                                        fetchCard();
                                    }
                                }}
                                
                            >
                                <AddIcon mr="0.2rem" />
                            </ChakraButton>
                            <ChakraButton
                            bg="green.200"
                            maxW={{base: "5vw", sm: "25vw", md: "20vw"}}
                            _hover={{bg: "green.400"}}
                            disabled={!viewingCards}
                            ml="0.5rem"
                            onClick={() => shuffleCards(cards)}
                            >
                                <UpDownIcon mr="0.2rem" />
                            </ChakraButton>
                        </Collapse>
                        
                    </Flex>
                    
                    <Fade in={isOpen}>
                        <Flex    
                                width="min"
                                border="none"
                                boxShadow="lg"
                                borderRadius="full"
                                borderColor="orange.800"
                                padding={2}
                                mr={3}
                                bgColor="white"
                                
                            >
                                <Text fontWeight="bold" whiteSpace="nowrap" color="primary.900">{userName}</Text>
                        </Flex> 
                    </Fade>
                </Flex>
        </Flex>
    )
}