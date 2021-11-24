import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from '@src/theme';
import { globalStyles } from '@src/theme/global';
import { CardViewProvider } from '@src/contexts/CardViewContext';

import { Layout } from '@src/components/Layout';

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <ThemeProvider theme={theme}>
          <CardViewProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CardViewProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
