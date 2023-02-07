import React from 'react';

function TaskItem({ task }){
    return (
        <>
        <li> {task.frequency} {task.taskDesc} </li>
        </>
    )
}

export default TaskItem;