
import React from 'react';
//components
import DeleteButton from '../Buttons/DeleteButton';
import ClaimedChip from './ClaimedChip';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';

function UserTaskItem({ task }) {
    return (
        <>
            <li> 
                {task.name}: {task.taskDesc} {task.frequency} 
                <ClaimedChip />
                <UnclaimTaskButton task={task}/>
                <DeleteButton className="taskDelete" task = {task}/>
                <EditButton className="taskEdit" task = {task}/>
            </li>
        </>
    )
}

export default UserTaskItem;
