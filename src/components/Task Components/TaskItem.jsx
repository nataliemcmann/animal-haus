import React from 'react';
import {useSelector} from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton';
import TaskClaimButton from '../Buttons/TaskClaimButton';
import ClaimedChip from './ClaimedChip';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';

function TaskItem({task}){
    const user = useSelector((store) => store.user);

    if (task.userID === user.id) {
        return (
            <>
                <li> 
                    {task.frequency} {task.taskDesc} 
                    <ClaimedChip />
                    <UnclaimTaskButton />
                    <DeleteButton />
                </li>
            </>
        )
    } else {
        return (
            <>
                <li> 
                    {task.frequency} {task.taskDesc} 
                    <TaskClaimButton task={task}/>
                    <DeleteButton />
                </li>
            </>
        )
    }
}

export default TaskItem;