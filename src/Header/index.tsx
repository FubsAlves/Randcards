import { Flex, Box, Text, Fade } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

import { useUserName } from '../hooks/useUserName';

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
        <Flex height="3rem" justifyContent="end" alignItems="center" mr={5}>
                <Fade in={isOpen}>
                    <Box
                            
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