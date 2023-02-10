import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
//custom component
import SubmitButton from '../Buttons/SubmitButton';
//mui component
import TextField from '@mui/material/TextField';

function EditTaskForm() {
    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();
    //grab id from route parameter
    let { id } = useParams(); 
    //subscribe to singlePetReducer
    const tasks = useSelector(store => store.tasks);

    //fetch a single task's details on page load
    useEffect(() => {
        console.log(id);
        dispatch({
            type: 'FETCH_A_TASK',
            payload: id
        });
    }, [])

    //onChange dispatches to reducer
    const changeTaskDesc = (value) => {
        dispatch({
            type: 'SET_TASK_DESC',
            payload: value
        })
    }

    const changeFrequency = (value) => {
        dispatch({
            type: 'SET_FREQUENCY',
            payload: value
        })
    }

    //onSubmit dispatch to put saga
    const editTask = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_THIS_TASK',
            payload: tasks.singleTaskReducer
        })
        //push to pet profile page
        history.push(`/pet/${tasks.singleTaskReducer.petID}`)
    }

    return (
        <>
        <h3>This is the task edit form!</h3>
        <form onSubmit={editTask}>
            <label htmlFor="taskDescription">
                <TextField
                    type="text"
                    value={tasks.singleTaskReducer.taskDesc || ''}
                    onChange={(event) => changeTaskDesc(event.target.value)}
                />
            </label>
            <label htmlFor="taskFrequency">
                <TextField
                    type="text"
                    value={tasks.singleTaskReducer.frequency || ''}
                    onChange={(event) => changeFrequency(event.target.value)}
                />
            </label>
            <SubmitButton className="taskEdit"/>
        </form>
        </>
    )
}

export default EditTaskForm;