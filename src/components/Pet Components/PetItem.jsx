import React from 'react';

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
                    <p>Food Details: {pet.cupsPerFeed} cup of {pet.foodDesc}</p>
                    {pet.exerciseMin && (
                    <p>Exercise Details: {pet.exerciseMin} of the following: {pet.exerciseDesc}</p>
                    )
                    }
                </Paper>
            </Grid>
        </>
    )
}

export default PetItem;