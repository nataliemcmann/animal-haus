import React from 'react';
import { useHistory } from 'react-router-dom';
//mui components
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserProfile() {
    const history = useHistory();

    const sendToUserPage = () => {
        history.push('/user')
    }

    return (
        <AccountCircleIcon onClick={sendToUserPage}/>
    )
}

export default UserProfile;