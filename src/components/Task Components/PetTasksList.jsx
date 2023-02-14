import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './PetTaskItem';
//mui components
import { Grid, Paper, Typography } from '@mui/material';


function PetTasksList({ id }) {
    const tasks = useSelector(store => store.tasks);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('This is the array of pet tasks: ', tasks.taskPetReducer);
        dispatch({
            type: 'FETCH_PET_TASKS',
            payload: id
        });
    }, [])

    return(
        <>
            <Paper>
                <Grid marginBottom={1}>
                        <Typography 
                        sx={{p: 1.5, 
                            fontSize: '1.2rem',
                            textAlign: 'center',
                            color: '#fff',
                            backgroundColor: '#6c5a8f'}}
                        >
                            Current Tasks
                        </Typography>
                    </Grid>
                <Grid paddingBottom={1}>
                    <ul>
                        {tasks.taskPetReducer && tasks.taskPetReducer.map((task) =>{
                            return <TaskItem id = {id} key={task.id} task={task}/>
                            }
                        )}
                    </ul>
                </Grid>
            </Paper>
        </>
    )
}

export default PetTasksList;