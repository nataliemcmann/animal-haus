
import React from 'react';
import './TaskItem.css';
//components
import DeleteButton from '../Buttons/DeleteButton';
import UnclaimTaskButton from '../Buttons/UnclaimTaskButton';
import EditButton from '../Buttons/EditButton';
import CompleteIcon from '../Buttons/CompleteIcon';
//mui components
import { Paper, Typography } from '@mui/material';

function UserTaskItem({ task }) {

        return(
                    <li> 
                        <CompleteIcon task={task}/>
                        {task.name}: {task.taskDesc} {task.frequency} 
                        <UnclaimTaskButton task={task}/>
                        <DeleteButton className="taskDelete" task = {task}/>
                        <EditButton className="taskEdit" task = {task}/>
                    </li>
        )
}

export default UserTaskItem;
