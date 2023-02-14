import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './PetTaskItem';
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
            <Paper>
                <Grid marginLeft={10} paddingTop={1}>
                    <h3>Current Tasks</h3>
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