import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './PetTaskItem';
//mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';

function TaskSummary() {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to pets reducer
    const pets = useSelector(store => store.pets);

    return (
        <>
        <h2>This is the task summary page!</h2>
        </>
    )
}

export default TaskSummary;