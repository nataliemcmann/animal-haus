import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
//mui component
import { Stack } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
      <Stack paddingTop={8}>
        <LoginForm />

          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>
        </Stack>
  );
}

export default LoginPage;
