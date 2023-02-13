import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import UserTasksList from '../Task Components/UserTasksList';
//mui component
import { Stack, Grid, Typography } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_TASKS' })
  })

  return (
    <Stack padding={2}>
      <Grid m={3}>
        <Typography variant="h4">Welcome, {user.username}!</Typography>
      </Grid>
      <UserTasksList id={user.id}/>
    </Stack>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
