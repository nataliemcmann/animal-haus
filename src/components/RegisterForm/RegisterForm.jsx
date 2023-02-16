import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mui components
import { Grid, Typography, TextField } from '@mui/material';
import RegisterButton from '../Buttons/RegisterButton';
import LogInButton from '../Buttons/LogInButton';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Grid
        marginLeft={2}
        justifyContent="center"
      >
        <Typography variant="h4">Register User</Typography>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
      </Grid>
      <Grid
          container spacing={2}
          marginTop={4}
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
        <Grid 
          container direction="row" 
          flexWrap="nowrap" 
          justifyContent="space-evenly">
          <Grid>
            <RegisterButton />
          </Grid>
          <Grid container direction="column" sx={{width: '40%'}}>
            <button
              type="button"
              className="btn btn_asLink"
              onClick={() => {
                history.push('/login');
              }}
            >
              <Typography>Already a Member?</Typography>
            </button>
          </Grid>
        </Grid>
      </form>
  );
}

export default RegisterForm;
