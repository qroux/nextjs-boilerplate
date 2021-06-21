import {
  FormControl,
  TextField,
  Icon,
  Button,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { Context as AuthContext } from '../globalState/context/AuthContext';
import { useContext } from 'react';
import { formTypes } from './types/formTypes';

export default function AuthForm({
  type = formTypes.LOGIN,
}: {
  type?: formTypes;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    authUser,
    state: { errorMsg },
  } = useContext(AuthContext);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      authUser({ email, password, type });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.3,
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
              id='email-input'
              label='Email'
              type='email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '1rem' }}
            />
            <TextField
              required
              id='password-input'
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
              Register
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
