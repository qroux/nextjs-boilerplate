import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { Animations } from '../styles/animations';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log('PAGE PROPS=', router.pathname);

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
