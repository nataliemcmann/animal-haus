import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
//mui component
import Chip from '@mui/material/Chip';

function TaskClaimButton({task}) {
    //declare dispatch
    const dispatch = useDispatch();

    //subscribe to user
    const user = useSelector(store => store.user);

    //function to post new user relationship
    const addUserClaim = () => {
        let taskObject = { 
            taskID: task.id,
            petID: task.petID,
            householdId: user.householdId
        } //need task id for dispatch to re-render petTasks
        // console.log(taskObject);
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

