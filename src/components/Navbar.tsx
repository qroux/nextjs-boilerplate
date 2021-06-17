import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { useContext } from 'react';
import { Context as AppContext } from '../globalState/context/AppContext';

export default function Navbar() {
  const {
    state: { darkMode },
    switchTheme,
  } = useContext(AppContext);

  return (
    <AppBar
      position='static'
      color='transparent'
      elevation={0}
      style={{ transition: 'all 0.3s linear' }}>
      <Toolbar variant='dense'>
        <Link href='/' passHref>
          <Button color='inherit'>Home</Button>
        </Link>
        <FormControlLabel
          style={{ marginLeft: 'auto' }}
          control={
            <Switch
              checked={darkMode}
              onChange={switchTheme}
              name='darkmode'
              color='primary'
            />
          }
          label='Dark Mode'
        />
      </Toolbar>
    </AppBar>
  );
}
