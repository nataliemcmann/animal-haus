import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
//mui components
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';

function TopNav() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <Paper elevation={3}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Avatar 
                        alt="Animal Haus Logo" 
                        src='./AnimalHAUS.png'
                        sx={{ width: 56, height: 56 }}
                    />

                    <Link className="navLink" to="/about">
                        About
                    </Link>
                    {/* If a user is logged in, show these links */}
                    {user.id && (
                        <>
                        <LogOutButton className="navLink" />

                        </>
                    )}

                </Grid> 
            </Paper>
        </div>
    )
}

export default TopNav;