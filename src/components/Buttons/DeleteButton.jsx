import React from 'react';
import { useDispatch } from 'react-redux';
//mui components
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function DeleteButton(props) {
    const dispatch = useDispatch();

    const runDeleteDispatch = () => {
        console.log(props)
        if (props.className === 'petDelete') {
            let idToDelete = props.pet.id;
            console.log('pet id to delete', idToDelete);
            dispatch({
                type: 'DELETE_THIS_PET',
                payload: idToDelete
            })
            //then history.push to pet summary page
        } else if (props.className === 'taskDelete') {
            let taskObject = {
                idToDelete: props.task.id,
                petID: props.task.petID
            }
            console.log('task id to delete', taskObject.idToDelete);
            dispatch({
                type: 'DELETE_THIS_TASK',
                payload: taskObject
            })
        }
    }


        return(
            <DeleteForeverIcon onClick={runDeleteDispatch} variant="contained"color="error" size="small">
                Delete
            </DeleteForeverIcon>
        )
}

export default DeleteButton;