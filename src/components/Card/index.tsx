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
                w={ { base: "9rem", sm: "10rem", md: "10rem", lg: "14rem" } }
                alignItems="center"
                justifyContent="space-between"
                border="1px"
                borderColor="gray.400"
                borderRadius="xl"
                bgColor="whiteAlpha.900"
                flexDirection="column"
            >
                <Image
                    
                    
                    borderRadius="xl"
                    borderColor="gray.400"
                    src={cardRevealed.image}
                    width="99.5%"
                    height="50%"
                    mt="0.05rem"
                    alt={cardRevealed.name}
                    
                    
                />
                
                <Text fontWeight="bold" fontSize="xl">{cardRevealed.name}</Text>
                <Text my="0.5rem" fontSize="sm" textAlign="center">{cardRevealed.description}</Text>
                <Text fontWeight="bold" color="primary.900" alignSelf="end" mr="0.2rem" mb="0.2rem" border="1px" bgColor="white" borderRadius="full" mb="0.2rem" padding="1">{cardRevealed.points}pt</Text>
            </Flex>    
        </>
    )
}