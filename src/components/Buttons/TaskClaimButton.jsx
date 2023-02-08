import React from 'react';
import {useDispatch } from 'react-redux';
//mui component
import Button from '@mui/material/Button';

function TaskClaimButton({task}) {
    //declare dispatch
    const dispatch = useDispatch();

    //function to post new user relationship
    const addUserClaim = () => {
        let taskID = task.id
        console.log(taskID);
        dispatch({
            type: 'ADD_TASK_USER',
            payload: taskID
        })
    }

    return(
        <Button 
            onClick={addUserClaim}
            variant="contained" color ="success" size="small"
        >
            Claim
        </Button>
    )
}

export default TaskClaimButton;