import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserTaskItem from './UserTaskItem';
//mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Paper, Typography } from '@mui/material';

function UserTasksList({ id }) {
    const tasks = useSelector(store => store.tasks);

    useEffect(() => {
        console.log('This is the array of user tasks: ', tasks.userTasksReducer);
    }, [])

    return (
        <>
            <Grid 
                marginLeft={4}
                marginTop={2}
                marginBottom={2}
                alignItems="center"
            >
                <Paper sx={{width: 294}}>
                    <Grid marginLeft={10} paddingTop={1}>
                        <Typography variant="h5">Your Tasks</Typography>
                    </Grid>
                </Paper>
                <Paper sx={{width: 294}}>
                    <Grid paddingBottom={1}>
                        <ul>
                            {tasks.userTasksReducer && tasks.userTasksReducer.map((task) =>{
                                return <UserTaskItem id = { id } key={task.id} task={task}/>
                                }
                            )}
                        </ul>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default UserTasksList;

