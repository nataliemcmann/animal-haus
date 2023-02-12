import React from 'react';
//components
import DetailsButton from '../Buttons/DetailsButton';
//mui component
import { Grid, Paper } from '@mui/material';

function PetItem({ pet }) {

    return (
        <>
            <Grid 
            container spacing={2}
            margin={2}
            alignItems="center"
            >    
                <Paper>
                    <h3>{pet.name}</h3> 
                    <p>Cups of food per meal: {pet.cupsPerFeed}</p>
                    {pet.exerciseMin && (
                    <p>Daily Exercise: {pet.exerciseMin}</p>
                    )
                    }
                    <DetailsButton id={pet.id}/>
                </Paper>
            </Grid>
        </>
    )
}

export default PetItem;