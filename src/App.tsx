import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import { theme } from './assets/theme/globalStyle';
import { Layout } from './components/Layout/Layout';
import { Home } from './modules/home/Home';
import { CoreProvider } from './react-query/queryClient';

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