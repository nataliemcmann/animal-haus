import React from 'react';
import {useDispatch } from 'react-redux';
//mui component
import Button from '@mui/material/Button';

function TaskClaimButton({task}) {
    //declare dispatch
    const dispatch = useDispatch();

    //function to post new user relationship
    const addTaskUser = () => {
        let taskID = task.id
        console.log(taskID);
    }

    return(
        <Button 
            onClick={addTaskUser}
            variant="contained" color ="success" size="small"
        >
            Claim
        </Button>
    )
}

export default TaskClaimButton;