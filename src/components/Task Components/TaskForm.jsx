import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; //try using userParams to get petID
//import components
import SubmitButton from '../Buttons/SubmitButton';
import FrequencyMenu from './FrequencyMenu';
//import mui components
import { Grid, Paper, Typography, TextField } from '@mui/material';

//this will be on PetProfile to start
function TaskForm () {
    //state for form inputs
    const [taskDesc, setTaskDesc] = useState('');
    const [frequency, setFrequency] = useState('');

    //declare dispatch
    const dispatch = useDispatch();

    //subscribe to user
    const user = useSelector(store => store.user);

    //subscribe to tasks
    const tasks = useSelector(store => store.tasks);

    //grab pet id from router parameter
    let { id } = useParams();

    //on submit function
    const addTask = (event) => {
        event.preventDefault();
        let taskObject = {
            taskDesc,
            frequency: tasks.singleTaskReducer.frequency,
            petID: id
        }
        // console.log('Data to dispatch: ', taskObject);
        //dispatch to saga to post and refresh page
        dispatch({
            type: 'ADD_TASK',
            payload: taskObject
        })
        //clear inputs
        setTaskDesc('');

    }


    if (user.id === user.adminId) {
        return (
            <Paper elevation={4} sx={{paddingBottom:1}}>
                <form onSubmit={addTask}>
                        <Grid marginBottom={3}>
                            <Typography 
                            variant="h6"
                            sx={{p: 1.5, 
                                textAlign: 'center',
                                color: '#fff',
                                backgroundColor: '#6c5a8f'}}
                            >
                                Add Tasks
                            </Typography>
                        </Grid>
                        <Grid
                        container direction="row"
                        justifyContent="space-evenly"
                        flexWrap="nowrap"
                        marginBottom={1}
                        >
                            <TextField sx={{width: '45%'}}
                                id="task-description"
                                variant="filled"
                                multiline
                                label="Task Description"
                                value={taskDesc}
                                required
                                onChange={(event) => setTaskDesc(event.target.value)}
                            />
                            <FrequencyMenu />
                        </Grid>
                        <Grid marginLeft={16}>
                            <SubmitButton />
                        </Grid>
                </form>
            </Paper>
        );
    } else {
        return null
    }
}

export default TaskForm;