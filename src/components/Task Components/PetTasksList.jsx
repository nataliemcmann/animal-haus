import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
//mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';


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
            <Grid 
                marginLeft={4}
                marginTop={2}
                marginBottom={2}
                alignItems="center"
            >
                <Paper sx={{width: 294}}>
                    <Grid marginLeft={10} paddingTop={1}>
                        <h3>Current Tasks</h3>
                    </Grid>
                    <Grid paddingBottom={1}>
                        <ul>
                            {tasks.taskPetReducer && tasks.taskPetReducer.map((task) =>{
                                return <TaskItem key={task.id} task={task}/>
                                }
                            )}
                        </ul>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default PetTasksList;