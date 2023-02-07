import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//components
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import TaskForm from '../Task Components/TaskForm';
import PetTasksList from '../Task Components/PetTasksList';
//mui components
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function PetProfile () {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to singlePetReducer
    const pets = useSelector(store => store.pets);
    //grab id from route parameter
    let { id } = useParams();

    //fetch a pet's details on page load
    useEffect(() => {
        console.log(id);
        dispatch({
            type: 'FETCH_PET_DETAILS',
            payload: id
        });
    }, [])

    return (
        <>
            <Box sx={{
                width: 318,
                m: 1}}
                >
                <Grid 
                container spacing={2}
                m={2}
                >
                    <DeleteButton 
                    className="petDelete" 
                    pet={pets.singlePetReducer}
                    />
                </Grid>
                <Grid
                container spacing={4}
                marginTop={2}
                marginBottom={2}
                justifyContent="space-evenly"
                alignItems="center"
                >
                    <Paper>
                        <h4>{pets.singlePetReducer.name}</h4>
                    </Paper>
                    <Paper>
                        <h4>Age: {pets.singlePetReducer.age}</h4>
                    </Paper>
                </Grid>
                <Grid 
                container spacing={2}
                marginLeft={4}
                marginTop={2}
                marginBottom={2}
                alignItems="center"
                >
                    <Paper>
                        <p>
                            {pets.singlePetReducer.cups_per_feeding} cup of {pets.singlePetReducer.food_desc} 
                        </p>
                    </Paper>
                </Grid>
                <Grid 
                container spacing={2}
                marginLeft={4}
                marginTop={2}
                marginBottom={2}
                alignItems="center"
                >
                    <Paper>
                        <p>
                            {pets.singlePetReducer.exercise_min} daily of the following activities: {pets.singlePetReducer.exercise_desc} 
                        </p>
                    </Paper>
                </Grid>
                <TaskForm />
                <PetTasksList id={id}/>         
            </Box>
        </> 
    )
}

export default PetProfile;