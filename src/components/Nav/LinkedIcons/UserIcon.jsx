import React from 'react';
import { useHistory } from 'react-router-dom';
//mui component
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserIcon() {
    const history = useHistory();

    const sendToUserPage = () => {
        history.push('/user')
    }

    return (
        <AccountCircleIcon onClick={sendToUserPage}/>
    )
}

export default UserIcon;