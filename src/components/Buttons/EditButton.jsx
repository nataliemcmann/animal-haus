import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//mui components
import EditIcon from '@mui/icons-material/Edit';

function EditButton(props) {
    const history = useHistory();

    const user = useSelector(store => store.user);

    const sendToEditForm = () => {
        // console.log('going to pet edit page')
        if (props.className === 'petEdit') {
            history.push(`/pet/edit/${props.pet.id}`);
        } else if (props.className === 'taskEdit') {
            history.push(`/task/edit/${props.task.id}`)
        }
    }

    if (user.id === user.adminId) {
        return(
            <EditIcon onClick={sendToEditForm} color="primary" size="small">
                Edit
            </EditIcon>
        )
    } else {
        return null
    }
}

export default EditButton;