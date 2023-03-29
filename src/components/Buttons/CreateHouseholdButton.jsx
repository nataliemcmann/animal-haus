import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PurpleButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1.5rem',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 2,
    backgroundColor: '#8073a4',
    borderColor: '#171418',
    '&:hover': {
    backgroundColor: '#403742',
    borderColor: '#171418',
    boxShadow: 'none',
},
'&:active': {
    boxShadow: 'none',
    backgroundColor: '#8073a4',
    borderColor: '#171418',
}
});

export default function CreateHouseholdButton() {
    return (
        <PurpleButton 
        variant="contained" size="large" type="submit" aria-label="submit"
        >
            Create Household
        </PurpleButton>
    )
}