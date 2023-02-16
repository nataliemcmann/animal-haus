import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
//mui components
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function TopNav() {
    const user = useSelector((store) => store.user);

    const history = useHistory();

    const sendToAbout = () => {
        history.push('/about');
    }

    const sendToLogin = () => {
        history.push('/login');
    }

    return (
            <Paper elevation={3}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Avatar 
                        alt="Animal Haus Logo" 
                        src='./Animal_HAUS.png'
                        sx={{ width: 75, height: 75 }}
                        onClick={sendToLogin}
                    />

                    <InfoIcon onClick={sendToAbout}/>

                    {/* If a user is logged in, show these links */}
                    {user.id && (
                        <>
                        <LogOutButton />
                        </>
                    )}

                </Grid> 
            </Paper>
    )
}

export default TopNav;