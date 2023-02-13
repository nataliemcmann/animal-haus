import React from 'react';
import { useSelector } from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import CompleteIcon from '../Buttons/CompleteIcon';
import ClaimStatusChip from './ClaimStatusChip';
//mui components

function TaskItem({ task }) {
    const user = useSelector((store) => store.user);

    return(
        <>
            <li> 
                <CompleteIcon task={task}/>
                {task.name}: {task.taskDesc} {task.frequency} 
                <ClaimStatusChip id={user.id} task={task}/>
                <DeleteButton className="taskDelete" task = {task}/>
                <EditButton className="taskEdit" task = {task}/>
            </li>
        </>
    )
}

export default TaskItem;