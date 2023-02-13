import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
//mui components
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LogInButton from '../Buttons/LogInButton';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <Grid>
        <Typography variant="h3">Login</Typography>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
      </Grid>
      <Grid
        container spacing={2}
        marginTop={2}
        justifyContent="space-evenly"
      >
        <Typography sx={{fontSize:'1.3rem'}}>Username:</Typography>
          <TextField
            required
            id="username-input"
            variant="filled"
            label="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      </Grid>
      <Grid
        container spacing={2}
        marginTop={2}
        marginBottom={2}
        justifyContent="space-evenly"
      >
        <Typography sx={{fontSize:'1.3rem'}}>Password:</Typography>
          <TextField
            required
            id="password-input"
            variant="filled"
            label="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </Grid>
      <Grid>
        <LogInButton />
      </Grid>
    </form>
  );
}

export default LoginForm;
