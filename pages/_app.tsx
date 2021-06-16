import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider as AuthProvider } from '../src/globalState/context/AuthContext';
import { Provider as AppProvider } from '../src/globalState/context/AppContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { darkTheme } from '../styles/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const theme = darkTheme(true);

  useEffect(() => {
    const jssStyles: HTMLElement | null = document.querySelector(
      '#jss-server-side'
    );
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component
                {...pageProps}
                location={router.pathname}
                key={router.pathname}
              />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </AppProvider>
  );
}
export default MyApp;
