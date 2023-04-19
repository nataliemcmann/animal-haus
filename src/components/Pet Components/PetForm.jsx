import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import components
import SubmitButton from '../Buttons/SubmitButton';
//mui components
import { Grid, Typography, TextField } from '@mui/material/';

function PetForm() {
    //state for form inputs
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [foodDesc, setFoodDesc] = useState('');
    const [cupsPerFeeding, setCupsPerFeeding] = useState(0);
    const [exerciseDesc, setExerciseDesc] = useState('');
    const [exerciseMin, setExerciseMin] = useState('');

    subscribe to user
    const user = useSelector(store => store.user);

    //declare history
    const history = useHistory();
    
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
            exerciseMin,
            householdId = user.householdId
        }
        // console.log('Data to dispatch: ', petObject);
        //dispatch to sagas
        dispatch({
            type: 'ADD_PET',
            payload: petObject
        })
        //clear inputs
        clearInputs();
        history.push('/petSummary');
        // console.log(pets.petIDReducer);
    }

    //function to clear inputs
    const clearInputs = () => {
        setName('');
        setAge('');
        setFoodDesc('');
        setCupsPerFeeding('');
        setExerciseDesc('');
        setExerciseMin('');
    }

    return (
        <Grid padding={0.6} paddingTop={4} paddingBottom={4}>
            <Grid
                marginLeft={2}
                marginBottom={2}
                justifyContent="center"
            >
                <Typography variant="h5">Add A Pet</Typography>
            </Grid>
            <form onSubmit={addPet}>
                <Grid
                container direction="row"
                justifyContent="space-evenly"
                flexWrap="nowrap"
                marginBottom={1}
                >
                        <TextField sx={{width: '45%'}}
                            id="pet-name"
                            variant="filled"
                            label="Pet Name"
                            size="small"
                            value={name}
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField sx={{width: '45%'}}
                            id="pet-age"
                            variant="filled"
                            label="Pet Age"
                            size="small"
                            value={age}
                            onChange={(event) => setAge(event.target.value)}
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
                        placeholder="food type and/or instructions"
                        value={foodDesc}
                        onChange={(event) => setFoodDesc(event.target.value)}
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
                        value={cupsPerFeeding}
                        required
                        onChange={(event) => setCupsPerFeeding(event.target.value)}
                    />
                    <TextField sx={{width: '45%'}}
                        id="exercise-time"
                        variant="filled"
                        label="Total Exercise Time"
                        size="small"
                        value={exerciseMin}
                        onChange={(event) => setExerciseMin(event.target.value)}
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
                        placeholder="exercise type (ex: walk or play)"
                        value={exerciseDesc}
                        onChange={(event) => setExerciseDesc(event.target.value)}
                    />
                </Grid>
                <Grid marginTop={2} marginLeft={18}>
                    <SubmitButton />
                </Grid>
            </form>
        </Grid>
    )
}

export default PetForm;