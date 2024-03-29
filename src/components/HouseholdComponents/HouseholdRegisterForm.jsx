import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreateHouseholdButton from '../Buttons/CreateHouseholdButton';
//mui components
import { Grid, Typography, TextField } from '@mui/material';

function HouseholdRegisterForm() {
    const [householdName, setHouseholdName] = useState('');
    const [householdCode, setHouseholdCode] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const createHousehold = (event) => {
        event.preventDefault();
        let newHousehold = {
            householdName,
            householdCode
        };
        dispatch({
            type: 'CREATE_HOUSEHOLD',
            payload: newHousehold
        });
        console.log('household created!', newHousehold);
        history.push('/petSummary');
    }

    return (
        <form className="formPanel" onSubmit={createHousehold}>
        <Grid
        marginLeft={2}
        justifyContent="center"
        >
            <Typography variant="h4">Create a Household</Typography>
        </Grid>
        <Grid
        container spacing={2}
        marginTop={4}
        justifyContent="space-evenly"
        >
            <Typography sx={{fontSize:'1.3rem'}}>Household Name:</Typography>
                <TextField
                required
                id="householdName-input"
                variant="filled"
                value={householdName}
                onChange={(event) => setHouseholdName(event.target.value)}
                />
        </Grid>
        <Grid
        container spacing={2}
        marginTop={2}
        marginBottom={2}
        justifyContent="space-evenly"
        >
            <Typography sx={{fontSize:'1.3rem'}}>Household Password:</Typography>
                <TextField
                required
                id="password-input"
                variant="filled"
                type="password"
                value={householdCode}
                onChange={(event) => setHouseholdCode(event.target.value)}
                />
        </Grid>
        <Grid marginLeft={12}>
            <CreateHouseholdButton />
        </Grid>
    </form>
    )
}

export default HouseholdRegisterForm;