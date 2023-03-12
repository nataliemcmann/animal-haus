import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
//custom component
import SubmitButton from '../Buttons/SubmitButton';
import FrequencyMenu from './FrequencyMenu';
//mui component
import { Stack, Grid, Typography, TextField} from '@mui/material/';

function EditTaskForm() {
    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();
    //grab id from route parameter
    let { id } = useParams(); 
    //subscribe to singlePetReducer
    const tasks = useSelector(store => store.tasks);

    //fetch a single task's details on page load
    useEffect(() => {
        // console.log(id);
        dispatch({
            type: 'FETCH_A_TASK',
            payload: id
        });
    }, [])

    //onChange dispatches to reducer
    const changeTaskDesc = (value) => {
        dispatch({
            type: 'SET_TASK_DESC',
            payload: value
        })
    }

    //onSubmit dispatch to put saga
    const editTask = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_THIS_TASK',
            payload: tasks.singleTaskReducer
        })
        //push to pet profile page
        history.push(`/pet/${tasks.singleTaskReducer.petID}`)
    }

    return (
        <Stack padding={0.6} paddingTop={4}>
            <Grid
            marginLeft={2}
            marginBottom={2}
            justifyContent="center"
            >
                <Typography variant="h6">Update task description or frequency!</Typography>
            </Grid>
            <form onSubmit={editTask}>
                <Grid
                container spacing={2}
                marginTop={2}
                justifyContent="center"
                >
                    <TextField
                        id="task-description"
                        variant="outlined"
                        label="Task Description"
                        value={tasks.singleTaskReducer.taskDesc || ''}
                        onChange={(event) => changeTaskDesc(event.target.value)}
                    />
                </Grid>
                <Grid
                container spacing={2}
                marginTop={4}
                justifyContent="space-evenly"
                >
                    <FrequencyMenu task={tasks.singleTaskReducer}/>
                </Grid>
                <Grid
                container spacing={2}
                marginTop={4}
                marginBottom={4}
                justifyContent="space-evenly"
                >
                    <SubmitButton className="taskEdit"/>
                </Grid>
            </form>
        </Stack>
    )
}

export default EditTaskForm;