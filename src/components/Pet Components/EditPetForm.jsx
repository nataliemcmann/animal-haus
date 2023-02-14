import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
//
import SubmitButton from '../Buttons/SubmitButton';
//mui components
import { Grid, Typography, TextField } from '@mui/material/';

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
        <Grid padding={0.6} paddingTop={4} paddingBottom={4}>
            <Grid
            marginLeft={2}
            marginBottom={2}
            justifyContent="center"
            >
                <Typography variant="h5">Update Pet Information</Typography>
            </Grid>
            <form onSubmit={editPet}>
                <Grid
                container direction="row"
                flexWrap="nowrap"
                justifyContent="space-evenly"
                marginBottom={1}
                >
                        <TextField sx={{width: '45%'}}
                            id="pet-name"
                            variant="filled"
                            label="Pet Name"
                            size="small"
                            value={pets.singlePetReducer.name || ''}
                            onChange={(event) => changeName(event.target.value)}
                        />
                        <TextField sx={{width: '45%'}}
                            id="pet-age"
                            variant="filled"
                            label="Pet Age"
                            size="small"
                            value={pets.singlePetReducer.age || ''}
                            onChange={(event) => changeAge(event.target.value)}
                        />
                </Grid>
                <Grid 
                    flexGrow={1} 
                    marginTop={2} 
                    paddingLeft={1}
                    justifyContent="center"
                >
                    <TextField sx={{width: '95%'}}
                        id="food-description"
                        variant="filled"
                        multiline
                        label="Food Description"
                        value={pets.singlePetReducer.foodDesc || ''}
                        onChange={(event) => changeFoodDesc(event.target.value)}
                    />
                </Grid>
                <Grid
                container direction="row"
                flexWrap="nowrap"
                justifyContent="space-evenly"
                marginTop={2} 
                >
                    <TextField sx={{width: '45%'}}
                        id="food-amount"
                        variant="filled"
                        label="Amount Per Feeding"
                        type="numeric"
                        size="small"
                        value={pets.singlePetReducer.cupsPerFeed || ''}
                        onChange={(event) => changeFoodAmount(event.target.value)}
                    />
                    <TextField sx={{width: '45%'}}
                        id="exercise-time"
                        variant="filled"
                        label="Total Exercise Time"
                        size="small"
                        value={pets.singlePetReducer.exerciseMin || ''}
                        onChange={(event) => changeExerciseAmount(event.target.value)}
                    />
                </Grid>            
                <Grid 
                    flexGrow={1} 
                    marginTop={2} 
                    paddingLeft={1}
                    justifyContent="center"
                >
                    <TextField sx={{width: '95%'}}
                        id="exercise-description"
                        variant="filled"
                        multiline
                        label="Exercise Description"
                        value={pets.singlePetReducer.exerciseDesc || ''}
                        onChange={(event) => changeExerciseDesc(event.target.value)}
                    />
                </Grid>
                <Grid marginTop={2} marginLeft={13}>
                    <SubmitButton className="petEdit"/>
                </Grid>
            </form>
        </Grid>
    )
}

export default EditPetForm;