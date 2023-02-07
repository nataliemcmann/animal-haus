import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; //try using userParams to get petID
//import components
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';

//this will be on PetProfile to start
function TaskForm () {
    //state for form inputs
    const [taskDesc, setTaskDesc] = useState('');
    const [frequency, setFrequency] = useState('');

    //declare dispatch
    const dispatch = useDispatch();

    //grab pet id from router parameter
    let { id } = useParams();

    //on submit function
    const addTask = (event) => {
        event.preventDefault();
        let taskObject = {
            taskDesc,
            frequency,
            petID: id
        }
        console.log('Data to dispatch: ', taskObject);
        //dispatch to saga to post and refresh page
    }

    return (
        <form onSubmit={addTask}>
            <h2>Add Tasks</h2>
            <div>
                <label htmlFor="taskDescription">
                    <input
                        type="text"
                        placeholder="task description"
                        value={taskDesc}
                        required
                        onChange={(event) => setTaskDesc(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="taskFrequency">
                    <input
                        type="text"
                        placeholder="frequency"
                        value={frequency}
                        required
                        onChange={(event) => setFrequency(event.target.value)}
                    />
                </label>
            </div>
            <SubmitButton />
        </form>
    );
}

export default TaskForm;