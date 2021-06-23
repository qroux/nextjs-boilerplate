import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AnimatedPage from '../src/components/AnimatedPage';
import { Context as AuthContext } from '../src/globalState/context/AuthContext';
import { Context as AppContext } from '../src/globalState/context/AppContext';
import StateCheck from '../src/components/StateCheck';
import { Button, Container, Typography } from '@material-ui/core';

export default function Home() {
  const {
    state: { token },
    fetchUserToken,
  } = useContext(AuthContext);

  const {
    state: { darkMode },
  } = useContext(AppContext);

  useEffect(() => {
    fetchUserToken();
  }, []);

  return (
    <AnimatedPage>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Container maxWidth='xl'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '2rem',
              flexDirection: 'column',
            }}>
            <h1>
              Welcome to{' '}
              <a
                style={{ color: '#0070f3', textDecoration: 'none' }}
                href='https://nextjs.org'>
                Next.js!
              </a>
            </h1>

            <div
              style={{
                width: '15 rem',
                overflow: 'hidden',
                marginBottom: '1rem',
              }}>
              <StateCheck state={token} label={'Token: ' + token} />
              <StateCheck state={darkMode} label='Dark Mode' />
            </div>
            <Typography variant='h6'>Transition test + Auth Flow</Typography>
            <Link href='/login' passHref>
              <Button
                variant='contained'
                color='secondary'
                name='login'
                style={{ width: '10rem' }}>
                Login
              </Button>
            </Link>
            <Link href='/register' passHref>
              <Button
                variant='contained'
                color='secondary'
                name='register'
                style={{ width: '10rem', marginTop: '0.5rem' }}>
                Register
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </AnimatedPage>
  );
}
