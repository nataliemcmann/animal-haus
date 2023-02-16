import React from 'react';
import { Grid, Typography } from '@mui/material'
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Grid margin={1}>
      <Typography variant="h6" sx={{m:1}}>Technologies:</Typography>
      <Typography sx={{fontSize: '1.1rem'}}>
        React, Redux, Saga, Node, Express, Passport, Postgres, and Material UI
      </Typography>
      <Typography variant="h6" sx={{m:1}}>Future Features:</Typography>
      <Typography sx={{fontSize: '1.1rem'}}>
        Households! Be an admin user and create and manage your own household with pets and members.
      </Typography>
      <Typography variant="h6" sx={{m:1}}>Acknowledgements:</Typography>
      <Typography sx={{fontSize: '1.1rem'}}>
        - Thanks to the Prime Digital Academy community and instructors
      </Typography>
      <Typography sx={{fontSize: '1.1rem'}}>
        - Special thanks to Matt, Dane, Vada, and the Vonnegut cohort
      </Typography>
      <Typography sx={{fontSize: '1.1rem'}}>
        - Thanks to my family, especially Bill, who inspired this application
      </Typography>
      <Grid 
      marginTop={0.8}
      container direction="row"
      justifyContent="space-evenly"
      >
        <Grid>
          <img className="relative" src='./images/howliday_dog.jpeg'/>
        </Grid>
        <Grid>
          <img className="relative" src='./images/jersey_cat.jpeg'/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
