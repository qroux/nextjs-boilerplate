import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default function Navbar() {
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
