import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//mui component
import Button from '@mui/material/Button';

function TaskClaimButton({task}) {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to user
    const user = useSelector((store) => store.user);

    //function to post new user relationship
    const addTaskUser = () => {
        let relation = {
            taskID: task.id,
            userID: user.id
        }
        console.log(relation);
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