import React from 'react';
import TaskClaimButton from '../Buttons/TaskClaimButton';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';

function ClaimStatusChip({ task, id }) {
        //function to find userID in taskUserRelation array
        const findUserID = (id) => {
            let found = false; 
            for (let relation of task.taskUserRelation) {
                if (relation.userID === id) {
                    return true
                }
            }
            return found;
        }
    
    if (findUserID(id)) {
        return(
            <UnclaimTaskButton task={task}/>
        )
    } else {
        return (
            <TaskClaimButton task={task}/>
        )
    }
}

export default ClaimStatusChip;