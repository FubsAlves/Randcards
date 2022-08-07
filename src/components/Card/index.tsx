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

export function Card({cardRevealed, ...rest}: CardProps) {
    return (
        <>
            <Flex
                h="17rem"
                w="15rem"
                alignItems="center"
                borderRadius="xl"
                bgColor="secondary.500"
                flexDirection="column"
                id={cardRevealed.id}
            >
                <Text fontWeight="bold" fontSize="xl">{cardRevealed.name}</Text>
                <Image src={cardRevealed.image} width="90%" height="60%" alt="exemplo" mt="1rem"></Image>
                <Text my="0.5rem">{cardRevealed.description}</Text>
                <Text fontWeight="bold">{cardRevealed.points}</Text>
            </Flex>    
        </>
    )
}