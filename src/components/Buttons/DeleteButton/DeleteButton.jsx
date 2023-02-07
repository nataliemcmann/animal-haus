import React from 'react';
import { useDispatch } from 'react-redux';
//mui components
import Button from '@mui/material/Button';

function DeleteButton(props) {
    const dispatch = useDispatch();

    const runDispatch = () => {
        console.log(props)
        if (props.className === 'petDelete') {
            let idToDelete = props.pet.id;
            console.log('pet id to delete', idToDelete);
            dispatch({
                type: 'DELETE_THIS_PET',
                payload: idToDelete
            })
            //then history.push to pet summary page
        } 
    }


        return(
            <Button onClick={runDispatch} variant="contained"color="error" size="small">
                Delete
            </Button>
        )
}

export default DeleteButton;