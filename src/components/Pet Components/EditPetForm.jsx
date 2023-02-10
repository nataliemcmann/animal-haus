import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
//
import SubmitButton from '../Buttons/SubmitButton';

function EditPetForm() {
    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();
    //grab id from route parameter
    let { id } = useParams(); 
    //subscribe to singlePetReducer
    const pets = useSelector(store => store.pets);

    //fetch a pet's details on page load
    useEffect(() => {
        console.log(id);
        dispatch({
            type: 'FETCH_PET_DETAILS',
            payload: id
        });
    }, [])

    //onChange dispatches to reducer
    const changeName = (value) => {
        dispatch({
            type: 'SET_PET_NAME',
            payload: value
        })
    }

    const changeAge = (value) => {
        dispatch({
            type: 'SET_PET_AGE',
            payload: value
        })
    }

    const changeFoodDesc = (value) => {
        dispatch({
            type: 'SET_PET_FOOD_DESC',
            payload: value
        })
    }

    const changeFoodAmount = (value) => {
        dispatch({
            type: 'SET_PET_FOOD_AMOUNT',
            payload: value
        })
    }

    const changeExerciseDesc = (value) => {
        dispatch({
            type: 'SET_PET_EXERCISE_DESC',
            payload: value
        })
    }

    const changeExerciseAmount = (value) => {
        dispatch({
            type: 'SET_PET_EXERCISE_TIME',
            payload: value
        })
    }
    //onSubmit dispatch to put saga
    const editPet = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_THIS_PET',
            payload: pets.singlePetReducer
        })
        //push to pet profile page
        history.push(`/pet/${id}`)
    }

    return (
        <form onSubmit={editPet}>
            <div>
                <label htmlFor="petName">
                    <input
                        type="text"
                        value={pets.singlePetReducer.name || ''}
                        onChange={(event) => changeName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="petAge">
                    <input
                        type="text"
                        value={pets.singlePetReducer.age || ''}
                        onChange={(event) => changeAge(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="foodDescription">
                    <input
                        type="text"
                        value={pets.singlePetReducer.foodDesc || ''}
                        onChange={(event) => changeFoodDesc(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="foodAmount">
                    <input
                        type="text"
                        value={pets.singlePetReducer.cupsPerFeed || ''}
                        onChange={(event) => changeFoodAmount(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="exerciseDescription">
                    <input
                        type="text"
                        value={pets.singlePetReducer.exerciseDesc || ''}
                        onChange={(event) => changeExerciseDesc(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="exerciseDuration">
                    <input
                        type="text"
                        value={pets.singlePetReducer.exerciseMin || ''}
                        onChange={(event) => changeExerciseAmount(event.target.value)}
                    />
                </label>
            </div>
            <SubmitButton className="petEdit"/>
        </form>
    )
}

export default EditPetForm;