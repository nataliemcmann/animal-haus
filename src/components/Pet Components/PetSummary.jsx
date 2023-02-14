import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import PetItem from './PetItem';
import AddPetButton from '../Buttons/AddPetButton';
//mui components
import { Stack, Grid, Paper, Typography } from '@mui/material';


function PetSummary() {
    //declare dispatch
    const dispatch = useDispatch();
    //subscribe to pets reducer
    const pets = useSelector(store => store.pets);

    //fetch all pet details upon page load
    useEffect(() => {
        dispatch({
            type: 'FETCH_PETS'
        });
    }, []);



    return (
        <>
            <Stack padding={0.6} paddingTop={1}>
                <Grid 
                        marginLeft={4}
                        marginTop={2}
                        marginBottom={2}
                        alignItems="center"
                >
                    <Paper sx={{width: 300}}>
                            <Grid marginLeft={4} paddingTop={1}>
                                <Typography variant="h5">Household Pet List</Typography>
                            </Grid>
                    </Paper>
                </Grid>
                <Grid marginLeft={2}>
                    {pets.petsReducer && pets.petsReducer.map((pet) => {
                        return <PetItem key={pet.id} pet={pet}/>
                    })}
                </Grid>
                <Grid
                    margin={2}
                    marginLeft={17}
                >
                    <AddPetButton />
                </Grid>
            </Stack>
        </>
    )
}

export default PetSummary;