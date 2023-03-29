import React from 'react';
import { useHistory } from 'react-router-dom';
//mui component
import { Stack } from '@mui/material';
import HouseholdRegisterForm from './HouseholdRegisterForm';

function HouseholdRegisterPage() {
    const history = useHistory();

    return (
        <Stack paddingTop={6}>
            <HouseholdRegisterForm />
            <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
            history.push('/household_login');
            }}
            >
                Join an Existing Household
            </button>
        </Stack>
    )
}

export default HouseholdRegisterPage;
