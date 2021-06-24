import Link from 'next/link';
import {
  FormControl,
  TextField,
  Icon,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { Context as AuthContext } from '../globalState/context/AuthContext';
import { useContext } from 'react';
import { formTypes } from './types/formTypes';

const useStyles = makeStyles((theme) => ({
  rightPanel: {
    [theme.breakpoints.down('xl')]: {
      flex: 0.3,
    },
    [theme.breakpoints.down('lg')]: {
      flex: 0.3,
    },
    [theme.breakpoints.down('md')]: {
      flex: 0.4,
    },
    [theme.breakpoints.down('sm')]: {
      flex: 0.8,
    },
    [theme.breakpoints.down('xs')]: {
      flex: 1,
    },
  },
}));

export default function AuthForm({
  type = formTypes.LOGIN,
}: {
  type?: formTypes;
}) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    authUser,
    resetAuthError,
    state: { errorMsg },
  } = useContext(AuthContext);

  useEffect(() => {
    return function cleanUpErrors() {
      resetAuthError();
    };
  }, []);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      authUser({ email, password, type });
    }
  };

  const renderButton = () => {
    const path = type === formTypes.LOGIN ? '/register' : '/login';
    const msg =
      type === formTypes.LOGIN
        ? 'Not registered yet ?'
        : 'Already got an account ?';

    return (
      <Link href={path} passHref>
        <Button
          size='large'
          color='inherit'
          style={{ marginTop: '1rem' }}
          disableRipple={true}
          disableElevation={true}>
          {msg}
        </Button>
      </Link>
    );
  };

  return (
    <div
      className={classes.rightPanel}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography variant='h4' color='textPrimary'>
        {type}
      </Typography>
      <div style={{ width: '80%' }}>
        <Typography variant='body1' color='error'>
          {errorMsg ? errorMsg : null}
        </Typography>

        <form
          noValidate
          autoComplete='off'
          onSubmit={onSubmitHandler}
          name='auth-form'
          style={{ width: '100%' }}>
          <FormControl fullWidth={true}>
            <TextField
              required
              inputProps={{
                autoComplete:
                  type === formTypes.LOGIN ? 'current-email' : 'new-email',
              }}
              id={type === formTypes.LOGIN ? 'current-email' : 'new-email'}
              label='Email'
              type='email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '1rem' }}
            />
            <TextField
              required
              inputProps={{
                autoComplete:
                  type === formTypes.LOGIN
                    ? 'current-password'
                    : 'new-password',
              }}
              id={
                type === formTypes.LOGIN ? 'current-password' : 'new-password'
              }
              label='Password'
              type='password'
              variant='outlined'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginTop: '1rem' }}
              color='primary'
            />
            <Button
              type='submit'
              variant='contained'
              size='large'
              color='secondary'
              style={{ marginTop: '3rem' }}
              startIcon={<SendIcon />}>
              {type === formTypes.LOGIN ? 'Login' : 'Register'}
            </Button>
          </FormControl>
        </form>
      </div>
      {renderButton()}
    </div>
  );
}
