import React from 'react';
import { useHistory } from 'react-router-dom';
//mui components
import Button from '@mui/material/Button';

function EditButton(props) {
    const history = useHistory();

    const sendToEditForm = () => {
        console.log('going to pet edit page')
        if (props.className === 'petEdit') {
            history.push(`/pet/edit/${props.pet.id}`);
        }
    }

    return(
        <Button onClick={sendToEditForm} variant="contained" size="small">
            Edit
        </Button>
    )
}

export default EditButton;