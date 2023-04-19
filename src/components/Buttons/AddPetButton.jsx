import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//mui components
import { Button } from '@mui/material';

function AddPetButton() {
    const history = useHistory();

    const user = useSelector(store => store.user);

    const sendToPetForm = () => {
        history.push('/addPet');
    }

    if (user.id === user.adminId) {
        return (
            <Button variant="contained" onClick={sendToPetForm}>Add Pet</Button>
        )
    } else {
        return null
    }
}

export default AddPetButton;