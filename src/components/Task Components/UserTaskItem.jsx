
import React from 'react';
//components
import DeleteButton from '../Buttons/DeleteButton';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function UserTaskItem({ task }) {

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
                <DoneOutlineIcon color= "error" />
            </li>
        </>
    )
}

export default UserTaskItem;
