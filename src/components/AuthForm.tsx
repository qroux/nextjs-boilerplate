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
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    authUser,
    state: { errorMsg, token },
  } = useContext(AuthContext);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      authUser({ email, password, type });
    }
  };

  return (
    <div>
      <Typography variant='h4' color='textPrimary'>
        {type}
      </Typography>
      <Typography variant='body1' color='secondary'>
        {errorMsg ? errorMsg : null}
      </Typography>

      <form
        noValidate
        autoComplete='off'
        onSubmit={onSubmitHandler}
        name='auth-form'>
        <FormControl>
          <TextField
            required
            id='email-input'
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id='password-input'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            style={{ marginTop: '1rem' }}
            startIcon={<SendIcon />}>
            Register
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
