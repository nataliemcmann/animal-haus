import React from 'react';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
//mui component
import { Stack } from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <Stack paddingTop={6}>
      <RegisterForm />

          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </Stack>
  );
}

export default RegisterPage;
