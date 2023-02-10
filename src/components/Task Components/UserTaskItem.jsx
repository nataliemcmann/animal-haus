
import React from 'react';
//components
import DeleteButton from '../Buttons/DeleteButton';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';

function UserTaskItem({ task }) {

    if (task.status) {
        <>
            <li> 
                {task.name}: {task.taskDesc} {task.frequency} 
                <UnclaimTaskButton task={task}/>
                <DeleteButton className="taskDelete" task = {task}/>
                <EditButton className="taskEdit" task = {task}/>
                complete
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
                needs to be done!
            </li>
        </>
    )
}

export default UserTaskItem;
