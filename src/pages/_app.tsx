import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Header } from '../Header';
import { UserNameProvider } from '../hooks/useUserName';
import { THEME } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserNameProvider>
      <ChakraProvider theme={THEME}>
          <Header/>
          <Component {...pageProps} />
      </ChakraProvider>
    </UserNameProvider>
  ) 
}

export default MyApp
