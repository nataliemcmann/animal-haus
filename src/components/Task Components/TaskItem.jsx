import React from 'react';
import { useSelector } from 'react-redux';
//components
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import CompleteIcon from '../Buttons/CompleteIcon';
import ClaimStatusChip from './ClaimStatusChip';
//mui components
import { Grid, Typography } from '@mui/material';

function TaskItem({ task }) {
    const user = useSelector((store) => store.user);

    return(
        <>
            <li> 
                <Grid
                    marginLeft={1}
                    marginRight={1}
                >
                    <Grid                                 
                        container spacing={2}
                        marginTop={1}
                        paddingTop={1}
                        paddingRight={1}
                        justifyContent="flex-end"
                    >
                        <CompleteIcon task={task}/>
                    </Grid>
                <Typography>Pet: {task.name}</Typography>
                <Typography>{task.frequency} Task: {task.taskDesc}</Typography> 
                    <Grid
                        container spacing={2}
                        marginTop={1}
                        justifyContent="space-evenly"
                    >
                        <ClaimStatusChip id={user.id} task={task}/>
                        <DeleteButton className="taskDelete" task = {task}/>
                        <EditButton className="taskEdit" task = {task}/>
                    </Grid>
                </Grid>
            </li>
        </>
    )
}

export default TaskItem;