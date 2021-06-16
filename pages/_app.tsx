import { useEffect } from 'react';

import '../styles/globals.css';
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
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          location={router.pathname}
          key={router.pathname}
        />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
