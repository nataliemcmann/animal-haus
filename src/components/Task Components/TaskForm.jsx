import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; //try using userParams to get petID
//import components
import SubmitButton from '../Buttons/SubmitButton';
//import mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';

//this will be on PetProfile to start
function TaskForm () {
    //state for form inputs
    const [taskDesc, setTaskDesc] = useState('');
    const [frequency, setFrequency] = useState('');

    //declare dispatch
    const dispatch = useDispatch();

    //grab pet id from router parameter
    let { id } = useParams();

    //on submit function
    const addTask = (event) => {
        event.preventDefault();
        let taskObject = {
            taskDesc,
            frequency,
            petID: id
        }
        console.log('Data to dispatch: ', taskObject);
        //dispatch to saga to post and refresh page
        dispatch({
            type: 'ADD_TASK',
            payload: taskObject
        })
        //clear inputs
        clearInputs();
    }

    //clear inputs
    const clearInputs = () => {
        setTaskDesc('');
        setFrequency('');
    }

    return (
        <form onSubmit={addTask}>
            <Grid 
                container spacing={2}
                marginLeft={4}
                marginTop={2}
                marginBottom={2}
                alignItems="center"
            >
                <Paper>
                    <Grid marginLeft={10}>
                        <h3>Add Tasks</h3>
                    </Grid>
                    <Grid
                        container spacing={2}
                        marginLeft={5}
                    >
                            <label htmlFor="taskDescription">
                                <TextField
                                    type="text"
                                    placeholder="task description"
                                    value={taskDesc}
                                    required
                                    onChange={(event) => setTaskDesc(event.target.value)}
                                />
                            </label>
                            <label htmlFor="taskFrequency">
                                <TextField
                                    type="text"
                                    placeholder="frequency"
                                    value={frequency}
                                    required
                                    onChange={(event) => setFrequency(event.target.value)}
                                />
                            </label>
                    </Grid>
                    <Grid marginLeft={21}>
                        <SubmitButton />
                    </Grid>
                </Paper>
            </Grid>
        </form>
    );
}

export default TaskForm;