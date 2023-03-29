import React from 'react';
import HouseholdLoginForm from './HouseholdLoginForm';
//mui component
import { Stack } from '@mui/material';

function HouseholdLoginPage() {

    return (
        <Stack paddingTop={6}>
            <HouseholdLoginForm />
        </Stack>
    );
}

export default HouseholdLoginPage;