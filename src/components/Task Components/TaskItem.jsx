import React from 'react';
import {useSelector} from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';


function TaskItem({task}){
    const user = useSelector((store) => store.user);

    if (task.userID === user.id) {
        return (
            <>
                <li> 
                    {task.frequency} {task.taskDesc} 
                     claimed button 
                    <DeleteButton />
                </li>
            </>
        )
    } else {
        return (
            <>
                <li> 
                    {task.frequency} {task.taskDesc} 
                     claim button
                    <DeleteButton />
                </li>
            </>
        )
    }
}

export default TaskItem;