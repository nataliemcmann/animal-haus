import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';


function PetTasksList({ id }) {
    const tasks = useSelector(store => store.tasks);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('This is the array of pet tasks: ', tasks.taskPetReducer);
        dispatch({
            type: 'FETCH_PET_TASKS',
            payload: id
        });
    }, [])

    return(
        <>
            <h2>Here's a list of tasks</h2>
            <ul>
                {tasks.taskPetReducer && tasks.taskPetReducer.map((task) =>{
                    return <TaskItem key={task.id} task={task}/>
                    }
                )}
            </ul>
        </>
    )
}

export default PetTasksList;