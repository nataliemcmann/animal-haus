import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import TaskItem from './TaskItem';
//mui components
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';

function TaskSummary() {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to tasks reducer
    const tasks = useSelector(store => store.tasks);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_TASKS'
        });
    }, [])

    return (
        <>
            <Grid marginLeft={10} paddingTop={1}>
                <h2>Household Task List</h2>
            </Grid>
            <Grid>
                {tasks.allTasksReducer && tasks.allTasksReducer.map((task) => {
                    return <TaskItem key={task.id} task={task}/>
                })}
            </Grid>
        </>
    )
}

export default TaskSummary;