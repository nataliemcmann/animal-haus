import React from 'react';
import { useHistory } from 'react-router-dom';
import HouseholdLoginForm from './HouseholdLoginForm';
//mui component
import { Stack } from '@mui/material';

function HouseholdLoginPage() {
    const history = useHistory();

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