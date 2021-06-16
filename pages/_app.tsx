import { useEffect } from 'react';

import { Provider as AuthProvider } from '../src/globalState/context/AuthContext';
import { Provider as AppProvider } from '../src/globalState/context/AppContext';

import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component
              {...pageProps}
              location={router.pathname}
              key={router.pathname}
            />
          </AnimatePresence>
        </Layout>
      </AuthProvider>
    </AppProvider>
  );
}
export default MyApp;
