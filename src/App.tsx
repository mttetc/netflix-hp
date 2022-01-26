import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Home } from './modules/home/screens/Home';
import { CoreProvider } from './react-query/queryClient';
import { Layout } from './components/Layout';
import { theme } from './assets/theme/globalStyle';

const customTheme = extendTheme(theme)

const App = () => {
  return (
    <CoreProvider>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <Home />
        </Layout>
      </ChakraProvider>
    </CoreProvider>
  );
}

export default App