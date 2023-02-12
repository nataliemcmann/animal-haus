import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import PetItem from './PetItem';
import AddPetButton from '../Buttons/AddPetButton';
//mui components
import { Grid } from '@mui/material';


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
            <Grid marginLeft={10} paddingTop={1}>
                <h2>Household Pet List</h2>
            </Grid>
            <Grid>
                {pets.petsReducer && pets.petsReducer.map((pet) => {
                    return <PetItem key={pet.id} pet={pet}/>
                })}
            </Grid>
            <Grid
                margin={2}
                alignItems="center"
            >
                <AddPetButton />
            </Grid>
        </>
    )
}

export default PetSummary;