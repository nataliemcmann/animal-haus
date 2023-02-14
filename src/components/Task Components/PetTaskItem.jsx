import React from 'react';
//components
import DeleteButton from '../Buttons/DeleteButton';
import ClaimStatusChip from './ClaimStatusChip';
import EditButton from '../Buttons/EditButton';
//mui components
import { Grid, Typography } from '@mui/material';

function PetTaskItem({task}){

    return (
        <>
            <li className="bordered"> 
                <Typography 
                sx={{margin: 1, fontSize: '1.2rem'}}
                >
                    {task.frequency} task: {task.taskDesc}
                </Typography>
                <Grid
                    container spacing={2}
                    marginTop={1}
                    marginBottom={2}
                    paddingBottom={1}
                    justifyContent="space-around"
                >
                    <ClaimStatusChip task={task}/>
                    <DeleteButton className="taskDelete" task = {task}/>
                    <EditButton className="taskEdit" task = {task}/>
                </Grid>
            </li>
        </>
    )
}

export default PetTaskItem;