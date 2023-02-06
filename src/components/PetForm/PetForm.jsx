import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function PetForm() {
    //state for form inputs
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [foodDesc, setFoodDesc] = useState('');
    const [cupsPerFeeding, setCupsPerFeeding] = useState('');
    const [exerciseDesc, setExerciseDesc] = useState('');
    const [exerciseMin, setExerciseMin] = useState('');
    
    //declare dispatch
    const dispatch = useDispatch();

    //on submit function
    const addPet = (event) => {
        event.preventDefault();
        let petObject = {
            name,
            age,
            foodDesc,
            cupsPerFeeding,
            exerciseDesc,
            exerciseMin
        }
        console.log('Data to send to dispatch: ', petObject);
        //dispatch to sagas
    }


    return (
        <form onSubmit={addPet}>
            <h2>Add a Pet</h2>
            <div>
                <label htmlFor="petName">
                    <input
                        type="text"
                        placeholder="pet name"
                        value={name}
                        required
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
            </div>
        </form>
    )
}

export default PetForm;