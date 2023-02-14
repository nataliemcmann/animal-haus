import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//components
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';
import TaskForm from '../Task Components/TaskForm';
import PetTasksList from '../Task Components/PetTasksList';
//mui components
import { Stack, Grid, Paper, Typography } from '@mui/material';

function PetProfile () {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to pets reducer
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
            <Stack padding={1}>
                <Grid 
                marginTop={2}
                container direction="row"
                justifyContent="space-evenly"
                >
                    <DeleteButton 
                    className="petDelete" 
                    pet={pets.singlePetReducer}
                    />
                    <EditButton 
                    className="petEdit"
                    pet={pets.singlePetReducer}
                    />
                </Grid>
                <Grid
                container direction="row"
                marginTop={2}
                marginBottom={2}
                justifyContent="space-evenly"
                alignItems="center"
                >
                    <Paper elevation={4}>
                        <Typography 
                        variant="h5"
                        sx={{p:2}}
                        >
                            {pets.singlePetReducer.name}
                        </Typography>
                    </Paper>
                    <Paper elevation={4}>
                        <Typography
                        variant="h5"
                        sx={{p:2}}
                        >
                            Age: {pets.singlePetReducer.age}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid 
                marginBottom={2}
                marginLeft={2.5}
                marginRight={2.5}
                >
                    <Paper elevation={4}>
                        <Typography sx={{p:2, fontSize: '1.2rem'}}>
                            {pets.singlePetReducer.cupsPerFeed} cup of {pets.singlePetReducer.foodDesc} 
                        </Typography>
                    </Paper>
                </Grid>
                <Grid 
                marginBottom={2}
                marginLeft={2.5}
                marginRight={2.5}
                >
                    <Paper elevation={4}>
                        <Typography sx={{p:2, fontSize: '1.2rem'}}>
                            {pets.singlePetReducer.exerciseMin} daily of the following activities: {pets.singlePetReducer.exerciseDesc} 
                        </Typography>
                    </Paper>
                </Grid>
                <Grid 
                marginBottom={2}
                marginLeft={2.5}
                marginRight={2.5}
                >
                    <TaskForm />
                </Grid>
                <Grid 
                marginBottom={2}
                marginLeft={2.5}
                marginRight={2.5}
                >
                    <PetTasksList id={id}/>    
                </Grid>
            </Stack>
        </> 
    )
}

export default PetProfile;