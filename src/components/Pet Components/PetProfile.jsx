import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//components
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import TaskForm from '../Task Components/TaskForm';
import PetTasksList from '../Task Components/PetTasksList';
//mui components
import { Box, Card, CardContent } from '@mui/material';
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
                height: 480,
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
                    <Card 
                        sx={{
                            flexGrow: 1,
                            marginLeft: 2,
                            marginRight: 2
                        }}
                    >
                        <CardContent>
                        <h3>{pets.singlePetReducer.name}</h3>
                        </CardContent>
                    </Card>
                    <Card 
                        sx={{
                            flexGrow: 1,
                            marginRight: 4
                        }}
                    >
                        <CardContent>
                        <h3>Age: {pets.singlePetReducer.age}</h3>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid 
                container spacing={2}
                marginTop={2}
                marginBottom={2}
                >
                    <Card sx={{
                            flexGrow: 1,
                            marginLeft: 1,
                            marginRight: 3
                            }}>
                        <CardContent>
                        <p>
                            {pets.singlePetReducer.cups_per_feeding} cup of {pets.singlePetReducer.food_desc} 
                        </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid 
                container spacing={2}
                marginTop={2}
                marginBottom={2}
                >
                    <Card sx={{
                            flexGrow: 1,
                            marginLeft: 1,
                            marginRight: 3
                            }}>
                        <CardContent>
                        <p>
                            {pets.singlePetReducer.exercise_min} daily of the following activities: {pets.singlePetReducer.exercise_desc} 
                        </p>
                        </CardContent>
                    </Card>
                </Grid>
                <TaskForm />
                <PetTasksList id={id}/>         
            </Box>
        </> 
    )
}

export default PetProfile;