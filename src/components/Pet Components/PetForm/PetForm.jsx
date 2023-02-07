import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import components
import SubmitButton from '../../Buttons/SubmitButton/SubmitButton';

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
        console.log('Data to dispatch: ', petObject);
        //dispatch to sagas
        dispatch({
            type: 'ADD_PET',
            payload: petObject
        })
        //history.push(send to Pet Profile)
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
            <div>
                <label htmlFor="petAge">
                    <input
                        type="text"
                        placeholder="age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="foodDescription">
                    <input
                        type="text"
                        placeholder="food type and/or instructions"
                        value={foodDesc}
                        onChange={(event) => setFoodDesc(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="foodAmount">
                    <input
                        type="text"
                        placeholder="cups per feeding"
                        value={cupsPerFeeding}
                        required
                        onChange={(event) => setCupsPerFeeding(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="exerciseDescription">
                    <input
                        type="text"
                        placeholder="exercise type (ex: walk or play)"
                        value={exerciseDesc}
                        onChange={(event) => setExerciseDesc(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="exerciseDuration">
                    <input
                        type="text"
                        placeholder="total minutes or hours of daily exercise"
                        value={exerciseMin}
                        onChange={(event) => setExerciseMin(event.target.value)}
                    />
                </label>
            </div>
            <SubmitButton />
        </form>
    )
}

export default PetForm;