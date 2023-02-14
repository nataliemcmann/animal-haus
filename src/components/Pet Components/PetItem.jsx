import React from 'react';
//components
import DetailsButton from '../Buttons/DetailsButton';
//mui component
import { Grid, Paper, Typography } from '@mui/material';

function PetItem({ pet }) {

    return (
        <>
            <Grid 
            container spacing={2}
            margin={2}
            alignItems="center"
            >    
                <Paper sx={{width: 300}} elevation={3}>
                    <Grid>
                        <Typography 
                        variant="h6" 
                        sx={{p: 1, 
                            color: '#fff',
                            backgroundColor: '#6c5a8f', 
                            fontWeight: 'bold'}}
                        >
                            {pet.name}
                        </Typography>
                    </Grid>
                    <Grid padding={1}>
                        <Typography>Cups of food per meal: {pet.cupsPerFeed}</Typography>
                    </Grid>
                    <Grid padding={1}>
                        {pet.exerciseMin && (
                        <Typography>Daily Exercise: {pet.exerciseMin}</Typography>
                        )
                        }
                    </Grid>
                    <Grid padding={1}>
                    <DetailsButton id={pet.id}/>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}

export default PetItem;