import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//mui component
import Chip from '@mui/material/Chip';

function UnclaimTaskButton({ task }) {
    //declare dispatch
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);


    //function to find claimID of specific user
    const findClaimID = (id) => {
        let idToDelete = 0; 
        for (let relation of task.taskUserRelation) {
            if (relation.userID === id) {
                idToDelete = relation.claimID;
            }
        }
        return idToDelete;
    }

    //function to delete user relationship
    const deleteUserClaim = () => {
        let taskObject = {
            claimID: findClaimID(user.id), 
            petID: task.petID
        }
        // console.log(taskObject);
        dispatch({
            type: 'DELETE_TASK_USER',
            payload: taskObject
        });
    }

        return (
            <Chip 
                label="Unclaim"
                onDelete={deleteUserClaim}
                variant="contained" color ="secondary" size="small"
            />
        )  
}

export default UnclaimTaskButton;