import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Header } from '../components/Header';
import { UserNameProvider } from '../hooks/useUserName';
import { RandomCardsProvider } from '../hooks/useRandomCards';
import { THEME } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RandomCardsProvider>
      <UserNameProvider>
        <ChakraProvider theme={THEME}>
            <Header/>
            <Component {...pageProps} />
        </ChakraProvider>
      </UserNameProvider>
    </RandomCardsProvider>
  ) 
}

export default MyApp
