import React from 'react';
import HouseholdLoginForm from './HouseholdLoginForm';
//mui component
import { Stack } from '@mui/material';

function HouseholdLoginPage() {

    return (
        <Stack paddingTop={6}>
            <HouseholdLoginForm />
            <button
                type="button"
                className="btn btn_asLink"
                onClick={() => {
                history.push('/household_registration');
                }}
                >
                    Create A Household
            </button>
        </Stack>
    );
}

export default HouseholdLoginPage;