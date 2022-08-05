import { Flex, Box, Text, Fade } from '@chakra-ui/react';

import { useUserName } from '../hooks/useUserName';

export function Header() {
    const {userName, isOpen} = useUserName();
    

    return (
        <Flex height="3rem" justifyContent="end" alignItems="center" mr={5}>
                <Fade in={isOpen}>
                    <Box
                            hidden={userName ? false : true}
                            width="min"
                            border="none"
                            boxShadow="lg"
                            borderRadius="full"
                            borderColor="orange.800"
                            padding={2}
                            bgColor="white"
                        >
                            <Text fontWeight="bold" color="primary.900">{userName}</Text>
                    </Box> 
                </Fade>
               
        </Flex>
    )
}