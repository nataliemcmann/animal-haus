import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import LogInButton from '../Buttons/LogInButton';
//mui components
import { Grid, Typography, TextField } from '@mui/material';

function HouseholdLoginForm() {
    const [householdName, setHouseholdName] = useState('');
    const [householdCode, setHouseholdCode] = useState('');

    const dispatch = useDispatch();

    const householdLogin = (event) => {
        event.preventDefault();

        console.log('submit login!');
    }

    return (
        <form className="formPanel" onSubmit={householdLogin}>
            <Grid
            marginLeft={2}
            justifyContent="center"
            >
                <Typography variant="h4">Login to an Existing Household</Typography>
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
                <LogInButton />
            </Grid>
        </form>
    )
}

export default HouseholdLoginForm;