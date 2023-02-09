import React from 'react';
import { useDispatch } from 'react-redux';
//mui component
import Button from '@mui/material/Button';

function UnclaimTaskButton({ task }) {
    //declare dispatch
    const dispatch = useDispatch();

    //function to delete user relationship
    const deleteUserClaim = () => {
        let taskObject = {
            claimID: task.claimID, 
            petID: task.petID
        }
        console.log(taskObject);
        dispatch({
            type: 'DELETE_TASK_USER',
            payload: taskObject
        });
    }

    return (
        <Button 
            onClick={deleteUserClaim}
            variant="contained" color ="secondary" size="small"
        >
            Unclaim
        </Button>
    )
}

export default UnclaimTaskButton;