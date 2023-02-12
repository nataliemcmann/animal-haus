import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './PetTaskItem';
//mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';

function TaskSummary() {
    return (
        <>
        <h2>This is the task summary page!</h2>
        </>
    )
}

export default TaskSummary;