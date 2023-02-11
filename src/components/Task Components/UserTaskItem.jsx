
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function UserTaskItem({ task }) {
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

    if (task.status) {
        <>
            <li> 
                {task.name}: {task.taskDesc} {task.frequency} 
                <UnclaimTaskButton task={task}/>
                <DeleteButton className="taskDelete" task = {task}/>
                <EditButton className="taskEdit" task = {task}/>
                <DoneOutlineIcon color= "success" />
            </li>
        </>
    }
    return (
        <>
            <li> 
                {task.name}: {task.taskDesc} {task.frequency} 
                <UnclaimTaskButton task={task}/>
                <DeleteButton className="taskDelete" task = {task}/>
                <EditButton className="taskEdit" task = {task}/>
                <DoneOutlineIcon onClick={markComplete} color= "error" />
            </li>
        </>
    )
}

export default UserTaskItem;
