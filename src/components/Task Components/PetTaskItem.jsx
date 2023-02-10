import React from 'react';
import {useSelector} from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton';
import TaskClaimButton from '../Buttons/TaskClaimButton';
import ClaimedChip from './ClaimedChip';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';

function PetTaskItem({task}){
    const user = useSelector((store) => store.user);

    const findUserID = (id) => {
        let found = false; 
        for (let relation of task.taskUserRelation) {
            if (relation.userID === id) {
                return true
            }
        }
        return found;
    }

    if (findUserID(user.id)) {
        return (
            <>
                <li> 
                    {task.frequency} {task.taskDesc} 
                    <ClaimedChip />
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
                    {task.frequency} {task.taskDesc} 
                    <TaskClaimButton task={task}/>
                    <DeleteButton className="taskDelete" task = {task}/>
                    <EditButton className="taskEdit" task = {task}/>
                </li>
            </>
        )
    }
}

export default PetTaskItem;