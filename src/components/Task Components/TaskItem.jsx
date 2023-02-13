import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components
import DeleteButton from '../Buttons/DeleteButton';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


function TaskItem({ task }) {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to user reducer
    const user = useSelector(store => store.user);

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
        return(
            <>
                <li> 
                    <DoneOutlineIcon color= "success"/>
                    {task.name}: {task.taskDesc} {task.frequency} 
                    <UnclaimTaskButton task={task}/>
                    <DeleteButton className="taskDelete" task = {task}/>
                    <EditButton className="taskEdit" task = {task}/>
                </li>
            </>
        )
    } else {
        return (
            <>
                <li> 
                    <DoneOutlineIcon onClick={markComplete} color= "error" />
                    {task.name}: {task.taskDesc} {task.frequency} 
                    <UnclaimTaskButton task={task}/>
                    <DeleteButton className="taskDelete" task = {task}/>
                    <EditButton className="taskEdit" task = {task}/>
                </li>
            </>
        )
    }
}

export default TaskItem;