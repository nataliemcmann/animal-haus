import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
//mui components
import { Grid, Typography } from '@mui/material';


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <>
      <Grid
      marginLeft={2}
      marginBottom={2}
      justifyContent="center"
      >
        <Typography variant="h3" sx={{textAlign: 'center'}}>{heading} to Animal Haus</Typography>
      </Grid>
        <Grid 
          container direction="row" 
          justifyContent="space-between" 
          marginTop={1}
          marginLeft={3.4}
        >
          <Typography sx={{textAlign: 'left'}}>
            Can't remember who last fed Fido? Tired of arguing about who cleans the litter box?
            Organize your hectic household with Animal Haus!
          </Typography>
          <Grid marginTop={2} sx={{width: '90%'}}>
            <RegisterForm />
          </Grid>
        </Grid>
    </>
  );
}

export default LandingPage;
