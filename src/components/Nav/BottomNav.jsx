import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
//mui import
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
//action imports
import UserIcon from './LinkedIcons/UserIcon';
import PetsPage from './LinkedIcons/PetsPage';
import TasksPage from './LinkedIcons/TasksPage';


function BottomNav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Paper 
        sx={{ bottom: 0, left: 0, 
              right: 0 }} 
        elevation={3}
      >
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <BottomNavigation>
              <BottomNavigationAction label="Home" icon={<UserIcon />}/>
              <BottomNavigationAction label="Pet Summary" icon={<PetsPage />}/>
              <BottomNavigationAction label="Task Summary" icon={<TasksPage />}/>
            </BottomNavigation>
          </>
        )}

      </Paper>
    </div>
  );
}

export default BottomNav;
