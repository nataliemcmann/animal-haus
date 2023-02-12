import React from 'react';
import { useHistory } from 'react-router-dom';
//mui components
import { Button } from '@mui/material';

function AddPetButton() {
    const history = useHistory();

    const sendToPetForm = () => {
        history.push('/addPet');
    }

    return (
        <Button variant="contained" onClick={sendToPetForm}>Add Pet</Button>
    )
}

export default AddPetButton;