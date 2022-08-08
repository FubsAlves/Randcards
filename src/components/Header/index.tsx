import { Flex, Box, Text, Fade } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { useUserName } from '../../hooks/useUserName';

export function Header() {
    const {userName, isOpen, onToggle} = useUserName(); 
    const prevUserName = useRef(0);  
    useEffect(() => {
        if((prevUserName.current === 0 && userName.length >= 1) || (prevUserName.current >= 1 && userName.length === 0)) {
            onToggle();
            prevUserName.current = userName.length;
        }
    }, [userName]);
    

    return (
        <Flex h="3rem" w="100vw" justifyContent="center">
                <Flex w="75vw" justifyContent="end">
                    <Fade in={isOpen}>
                        <Box     
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
                        </Box> 
                    </Fade>
                </Flex>
        </Flex>
    )
}