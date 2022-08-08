import { Flex, Image, Text } from '@chakra-ui/react';

interface CardProps {
    cardRevealed: {
        id: string;
        link: string;
        image: string;
        name: string;
        description: string;
        points: number;
    }
    
  }

export function Card({cardRevealed}: CardProps) {
    return (
        <>
            <Flex
                h={ { base: "17rem", sm: "15rem", md: "17rem", lg: "19.5rem" } } 
                w={ { base: "9rem", sm: "10rem", md: "10rem", lg: "15rem" } }
                alignItems="center"
                justifyContent="space-between"
                borderRadius="xl"
                bgColor="secondary.500"
                flexDirection="column"
            >
                <Text fontWeight="bold" fontSize="xl">{cardRevealed.name}</Text>
                <Image borderRadius='full' src={cardRevealed.image} width="90%" height="50%" alt={cardRevealed.name} mt="1rem"></Image>
                <Text my="0.5rem" textAlign="center">{cardRevealed.description}</Text>
                <Text fontWeight="bold">{cardRevealed.points} pt</Text>
            </Flex>    
        </>
    )
}