import { useContext } from 'react';
import { Context as AuthContext } from '../globalState/context/AuthContext';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default function Navbar() {
  const {
    state: { authenticated },
  } = useContext(AuthContext);

  console.log('state =', authenticated);

  return (
    <AppBar position='static' color='default' elevation={1}>
      <Toolbar variant='dense'>
        <Link href='/' passHref>
          <a>
            <Typography variant='h6' color='initial'>
              Home
            </Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
