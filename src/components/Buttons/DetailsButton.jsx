import React from 'react';
import { useHistory } from 'react-router-dom';
//mui components
import { Button } from '@mui/material';

function DetailsButton({ id }) {
    const history = useHistory();

    const sendToPetProfile = () => {
        history.push(`/pet/${id}`);
    }

    return (
        <Button variant="contained" onClick={sendToPetProfile}>See Details</Button>
    )
}

export default DetailsButton;