import React from 'react';
import {useDispatch } from 'react-redux';
//mui component
import Chip from '@mui/material/Chip';

function TaskClaimButton({task}) {
    //declare dispatch
    const dispatch = useDispatch();

    //function to post new user relationship
    const addUserClaim = () => {
        let taskObject = { 
            taskID: task.id,
            petID: task.petID
        } //need task id for dispatch to re-render petTasks
        console.log(taskObject);
        dispatch({
            type: 'ADD_TASK_USER',
            payload: taskObject
        })
    }

    return(
        <Chip 
            onClick={addUserClaim}
            label="CLAIM" color="success" variant="outlined" />
    )
}

export default TaskClaimButton;

