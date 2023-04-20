import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import TaskItem from './TaskItem';
//mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Stack, Paper, Typography } from '@mui/material';

function TaskSummary() {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to tasks reducer
    const tasks = useSelector(store => store.tasks);
    //subscribe to user reducer
    const user = useSelector(store => store.user);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_TASKS',
            payload: user.householdId
        });
    }, [])

    return (
        <>
            <Stack padding={0.6} paddingTop={1}>
                <Grid 
                    marginLeft={4}
                    marginTop={2}
                    marginBottom={2}
                    alignItems="center"
                >
                    <Paper sx={{width: 300}}>
                        <Grid marginLeft={4} paddingTop={1}>
                            <Typography variant="h5">Household Tasks List</Typography>
                        </Grid>
                    </Paper>
                    <Grid>
                        <ul>
                        {tasks.allTasksReducer && tasks.allTasksReducer.map((task) => {
                            return <TaskItem key={task.id} task={task}/>
                        })}
                        </ul>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default TaskSummary;