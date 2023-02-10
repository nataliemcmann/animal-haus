import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

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

    return (
        <>
        <h3>This is the task edit form!</h3>
        </>
    )
}

export default EditTaskForm;