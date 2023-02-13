import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//mui component
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function CompleteIcon({ task }) {
    //subscribe to user info
    const user = useSelector((store) => store.user);
    //declare dispatch
    const dispatch = useDispatch();
    //dispatch to task_complete saga
    const markComplete = () => {
        let taskID = task.id
        console.log(taskID);
        dispatch({
            type: 'ADD_COMPLETE',
            payload: {
                taskID,
                userID: user.id
            }
        })
    }

    if (task.status === 'true') {
        return (
            <DoneOutlineIcon color= "success"/>
        )
    } else {
        return(
            <DoneOutlineIcon onClick={markComplete} color= "error" />
        )
    }
}

export default CompleteIcon;